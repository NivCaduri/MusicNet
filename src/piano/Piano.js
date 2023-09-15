import React, { Component } from 'react';

// Define your piano notes and import the corresponding sound files
const pianoNotes = [
  { note: 'C4', sound: require('./PianoC4.mp3') },
  { note: 'C#4', sound: require('./PianoCSHARP4.mp3') },
  { note: 'D4', sound: require('./PianoD4.mp3') },
  { note: 'D#4', sound: require('./PianoDSHARP4.mp3') },
  { note: 'E4', sound: require('./PianoE4.mp3') },
  { note: 'F4', sound: require('./PianoF4.mp3') },
  { note: 'F#4', sound: require('./PianoFSHARP4.mp3') },
  { note: 'G4', sound: require('./PianoG4.mp3') },
  { note: 'G#4', sound: require('./PianoGSHARP4.mp3') },
  { note: 'A4', sound: require('./PianoA4.mp3') },
  { note: 'A#4', sound: require('./PianoASHARP4.mp3') },
  { note: 'B4', sound: require('./PianoB4.mp3') },
  { note: 'C5', sound: require('./PianoC5.mp3') }, // Second octave
  { note: 'C#5', sound: require('./PianoCSHARP5.mp3') },
  { note: 'D5', sound: require('./PianoD5.mp3') },
  { note: 'D#5', sound: require('./PianoDSHARP5.mp3') },
  { note: 'E5', sound: require('./PianoE5.mp3') },
  { note: 'F5', sound: require('./PianoF5.mp3') },
  { note: 'F#5', sound: require('./PianoFSHARP5.mp3') },
  { note: 'G5', sound: require('./PianoG5.mp3') },
  { note: 'G#5', sound: require('./PianoGSHARP5.mp3') },
  { note: 'A5', sound: require('./PianoA5.mp3') },
  { note: 'A#5', sound: require('./PianoASHARP5.mp3') },
  { note: 'B5', sound: require('./PianoB5.mp3') },
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
  verticalAlign: 'top',
  color: 'black',
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
  verticalAlign: 'top',
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
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100vh',
          padding: '20px',
        }}
      >
        <h1 style={{ margin: '0 0 20px 0' }}>Virtual Piano</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {pianoNotes.map((note) => (
            <button
              key={note.note}
              onClick={() => this.handleNoteClick(note)}
              style={
                note.note.includes('#')
                  ? {
                      ...blackKeyStyle,
                      backgroundColor: this.state.activeNote === note.note ? '#ffffcc' : 'black',
                    }
                  : {
                      ...whiteKeyStyle,
                      backgroundColor: this.state.activeNote === note.note ? '#ffffcc' : 'white',
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