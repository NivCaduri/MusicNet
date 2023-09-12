import React from 'react';
import { dividerClasses } from '@mui/material';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to MusicNet!</h1>
      <p>Discover a world of music like never before. 🎵</p>
      <p>
        MusicNet is your place to connect with fellow musicians and music fans.
        Whether you're a pro or just starting out, we've got something for you.
      </p>
      <ul>
        <li>
          🎸 Buy and Sell Instruments: Find and sell instruments easily. Upgrade
          your gear or give a new home to your old ones.
        </li>
        <li>
          🎶 Explore Music: Dive into music. Find new songs, see what's
          trending, and meet artists who love music like you do.
        </li>
        <li>
          🎤 Connect with Musicians: Make friends and work with musicians
          worldwide. Share your music and ideas.
        </li>
        <li>
          🎉 Have Fun Online: Join jam sessions, online concerts, and music
          challenges. MusicNet is where the fun begins.
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
