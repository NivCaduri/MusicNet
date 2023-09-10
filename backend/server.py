from flask import Flask, request, abort, make_response
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
    hashed_pwd = record[3]

    if bcrypt.hashpw(data['password'].encode('utf-8'), hashed_pwd) == hashed_pwd:
        abort(401)
    
    query = "insert into sessions (user_id, session_id) values (%s, %s)"
    session_id = str(uuid.uuid4())
    values = (record[0], session_id)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    resp = make_response()
    resp.set_cookie("session_id", session_id)
    return resp
    
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

def add_user(): #TODO hash function for the password before saving in the database
    data = request.get_json()
    print(data)
    query = "insert into users (name, username, password, bio, genre, instrument) values (%s, %s, %s, %s, %s, %s)"
    values = (data['name'], data['username'], data['password'], data['bio'], data['genre'], data['instrument'],)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_user_id = cursor.lastrowid
    cursor.close()
    return get_user(new_user_id)

def get_all_posts():
    query = "select id, title, body, user_id, image from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['id', 'title', 'body', 'user_id', 'image']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)

def get_post(id):
    query = "select id, title, body, user_id, image from posts where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id', 'title', 'body', 'user_id', 'image']
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
    check_login()
    data = request.get_json()
    print(data)
    query = "insert into posts (title, body, user_id, image) values (%s, %s, %s, %s)"
    values = (data['title'], data['body'], data['user_id'], data['image'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)

if __name__ == "__main__":
    app.run()