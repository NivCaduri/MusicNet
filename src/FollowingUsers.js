import React, { useState } from 'react';
import { AppBar, Container, Paper, Toolbar, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

// Sample user data with first names only
const usersData = [
  { id: 1, firstName: 'Nivos', isFollowed: false },
  { id: 2, firstName: 'Hagaros', isFollowed: false },
  { id: 3, firstName: 'Shoog', isFollowed: false },
  // Add more user objects here
];

function UserList({ users, onFollowClick }) {
  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Reduce space between name and button
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    fontSize: '0.8rem', // Make the Follow buttons smaller
  };

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} style={listItemStyle}>
          <ListItemText primary={user.firstName} />
          <Button
            onClick={() => onFollowClick(user.id)}
            variant={user.isFollowed ? 'outlined' : 'contained'}
            color={user.isFollowed ? 'error' : 'primary'}
            style={buttonStyle}
          >
            {user.isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

function FollowingUsers() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFollowClick = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isFollowed: !user.isFollowed } : user
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              MusicNet
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          MusicNet is all about connections!
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Start following your friends, colleagues, and interesting musicians!
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Looking for new friends?:
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for specific users"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '20px' }}
        />
        <Paper elevation={3} style={{ padding: '20px' }}>
          <UserList users={filteredUsers} onFollowClick={handleFollowClick} />
        </Paper>
      </Container>
    </div>
  );
}

export default FollowingUsers;
