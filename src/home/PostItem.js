import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const PostItem = ({
  username,
  transactionType,
  instrument,
  price,
  description,
  created_at,
  user,
}) => {
  console.log(username);
  return (
    <Card
      sx={{
        width: '50%',
        margin: 1,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #f5f5f5, #ffffff)',
        border: '2px solid #000', // Add bold borders
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
      />
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {transactionType === 'Sale' ? 'Selling' : 'Looking to Buy'}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ fontSize: '1rem' }}>
          {instrument}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${price}
        </Typography>
        <Box
          border="2px solid #000" // Add bold borders
          borderColor="grey.300"
          borderRadius={1}
          p={2}
          mt={2}
        >
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '2px solid #000', // Add bold border at the top of actions
          paddingTop: 1, // Add some padding to separate actions from content
        }}
      >
        <IconButton color="primary">
          <ChatBubbleOutlineIcon />
          <Typography variant="body2" color="text.primary">
            Comment
          </Typography>
        </IconButton>
        <IconButton color="success">
          <ThumbUpIcon />
          <Typography variant="body2" color="text.primary">
            Like
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostItem;
