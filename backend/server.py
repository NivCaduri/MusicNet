from flask import Flask, request, abort, make_response, redirect, url_for
from settings import dbpwd
import mysql.connector as mysql
import json
from flask_cors import CORS
import uuid
import bcrypt

db = mysql.connect(
    host = "localhost",
    user = "root",
    passwd = dbpwd,
    database = "musicnet")

print(db)

app = Flask(__name__)
CORS(app)

CORS(app,supports_credentials=True,origins=["http://localhost:3000", "http://127.0.0.1:5000"], expose_headers='Set-Cookie')

@app.route('/users', methods=['GET', 'POST'])
def manage_users():
    if request.method == 'GET':
        return get_all_users()
    else:
        return add_user()
    
@app.route('/users/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        return add_user()
    
@app.route('/users/login', methods=['POST'])
def login():
    if request.method == 'POST':
        return do_login()
    
def do_login():
    data = request.get_json()
    print(data)
    query = "select id, name, username, password from users where username = %s"
    values = (data['username'],)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()

    if not record:
        abort(401)

    user_id = record[0]
    hashed_pwd_db = record[3]

    if not bcrypt.checkpw(data['password'].encode('utf-8'), hashed_pwd_db.encode('utf-8')):
        abort(401)
    
    query = "insert into sessions (user_id, session_id) values (%s, %s)"
    session_id = str(uuid.uuid4())
    values = (record[0], session_id)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    resp = make_response(redirect(url_for('welcome')))
    resp.set_cookie("session_id", session_id, max_age=1800, httponly=True, secure=True, samesite='Strict')
    return resp

@app.route('/welcome')
def welcome():
    return "Welcome to the Welcome Page!"

    
@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()

def get_all_users():
    query = "select id, name, username, password from users"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['id', 'name', 'username', 'password']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)

def get_user(id):
    query = "select id, name, username, password from users where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id', 'name', 'username', 'password']
    return json.dumps(dict(zip(header, record)))

def add_user():
    data = request.get_json()
    print(data)
    hashed_pwd = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    query = "insert into users (name, username, password) values (%s, %s, %s)"
    values = (data['name'], data['username'], hashed_pwd.decode('utf-8'))
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_user_id = cursor.lastrowid
    cursor.close()
    return get_user(new_user_id)

def get_all_posts():
    query = "select id, instrument, description, price, transactionType from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['id', 'instrument', 'description', 'price', 'transactionType']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)

def get_post(id):
    query = "select id, instrument, description, price, transactionType, created_at from posts where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id', 'instrument', 'description', 'price', 'transactionType', 'created_at']
    return json.dumps(dict(zip(header, record)))

def check_login():
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(401)
    query = "select user_id from sessions where session_id = %s"
    values = (session_id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    if not record:
        abort(401)

def add_post():
    # check_login()
    data = request.get_json()
    print(data)
    query = "insert into posts (instrument, description, price, transactionType) values (%s, %s, %s, %s)"
    values = (data['instrument'], data['description'], data['price'], data['transactionType'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)

@app.route('/Logout', methods=['POST'])
def logout():
    session_id = request.cookies.get('session_id')

    if session_id:
        db = mysql.connect(
            host="localhost",
            user="root",
            passwd=dbpwd,
            database="musicnet"
        )

        # Remove session record from the sessions table
        query = "DELETE FROM sessions WHERE session_id = %s"
        values = (session_id,)
        cursor = db.cursor()
        cursor.execute(query, values)
        db.commit()
        cursor.close()

        db.close()

    # Clear session cookies
    resp = make_response("User logout successful")
    resp.set_cookie("session_id", "", expires=0)

    return resp

if __name__ == "__main__":
    app.run()