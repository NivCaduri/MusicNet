import React, { Component } from 'react';

// Define your piano notes and import the corresponding sound files
const pianoNotes = [
  { note: 'C4', sound: require('./PianoA.wav') },
  { note: 'C#4', sound: require('./PianoA.wav') },
  { note: 'D4', sound: require('./PianoA.wav') },
  { note: 'D#4', sound: require('./PianoA.wav') },
  { note: 'E4', sound: require('./PianoA.wav') },
  { note: 'F4', sound: require('./PianoA.wav') },
  { note: 'F#4', sound: require('./PianoA.wav') },
  { note: 'G4', sound: require('./PianoA.wav') },
  { note: 'G#4', sound: require('./PianoA.wav') },
  { note: 'A4', sound: require('./PianoA.wav') },
  { note: 'A#4', sound: require('./PianoA.wav') },
  { note: 'B4', sound: require('./PianoA.wav') },
  { note: 'C5', sound: require('./PianoA.wav') }, // Second octave
  { note: 'C#5', sound: require('./PianoA.wav') },
  { note: 'D5', sound: require('./PianoA.wav') },
  { note: 'D#5', sound: require('./PianoA.wav') },
  { note: 'E5', sound: require('./PianoA.wav') },
  { note: 'F5', sound: require('./PianoA.wav') },
  { note: 'F#5', sound: require('./PianoA.wav') },
  { note: 'G5', sound: require('./PianoA.wav') },
  { note: 'G#5', sound: require('./PianoA.wav') },
  { note: 'A5', sound: require('./PianoA.wav') },
  { note: 'A#5', sound: require('./PianoA.wav') },
  { note: 'B5', sound: require('./PianoA.wav') },
];

const whiteKeyStyle = {
  width: '60px',
  height: '200px',
  margin: '0',
  padding: '0',
  fontSize: '18px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  display: 'inline-block',
  verticalAlign: 'top', // Align the top of the buttons
  color: 'black', // Set the text color for white keys
};

const blackKeyStyle = {
  width: '40px',
  height: '150px',
  margin: '0',
  padding: '0',
  fontSize: '18px',
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #000',
  display: 'inline-block',
  verticalAlign: 'top', // Align the top of the buttons
  color: 'white', // Set the text color for black keys
};

class Piano extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: null,
    };
  }

  // Handle button click to play the note and change the background color
  handleNoteClick = (note) => {
    const audio = new Audio(note.sound);
    audio.play();
    this.setState({ activeNote: note.note });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center both horizontally and vertically
          alignItems: 'center', // Center both horizontally and vertically
          height: '100vh', // Set the height of the container to the full viewport height
        }}
      >
        <h1>Virtual Piano</h1>
        <p>
          Try out our new piano and create your melodies with the unique sound
          of MusicNet.
        </p>
        <div>
          {pianoNotes.map((note) => (
            <button
              key={note.note}
              onClick={() => this.handleNoteClick(note)}
              style={
                note.note.includes('#')
                  ? {
                      ...blackKeyStyle,
                      backgroundColor:
                        this.state.activeNote === note.note
                          ? '#ffffcc'
                          : 'black',
                      color:
                        this.state.activeNote === note.note ? 'black' : 'white',
                    }
                  : {
                      ...whiteKeyStyle,
                      backgroundColor:
                        this.state.activeNote === note.note
                          ? '#ffffcc'
                          : 'white',
                      color:
                        this.state.activeNote === note.note ? 'black' : 'black',
                    }
              }
            >
              {note.note}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Piano;
