import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { MusicNote, MusicOff, Guitar, People } from '@mui/icons-material';

const Welcome = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to MusicNet!
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Discover a world of music like never before. 🎵
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        MusicNet is your place to connect with fellow musicians and music fans.
        Whether you're a pro or just starting out, we've got something for you.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              🎸 Buy and Sell Instruments
            </Typography>
            <Typography variant="body2">
              Find and sell instruments easily. Upgrade your gear or give a new
              home to your old ones.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              🎶 Explore Music
            </Typography>
            <Typography variant="body2">
              Dive into music. Find new songs, see what's trending, and meet
              artists who love music like you do.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              🎤 Connect with Musicians
            </Typography>
            <Typography variant="body2">
              Make friends and work with musicians worldwide. Share your music
              and ideas.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              🎉 Have Fun Online
            </Typography>
            <Typography variant="body2">
              Join jam sessions, online concerts, and music challenges. MusicNet
              is where the fun begins.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
