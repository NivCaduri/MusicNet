import React, { Component } from 'react';

// Define your piano notes and import the corresponding sound files
const pianoNotes = [
  { note: 'C4', sound: require('./PianoC4.wav') },
  { note: 'C#4', sound: require('./PianoCSHARP4.wav') },
  { note: 'D4', sound: require('./PianoD4.wav') },
  { note: 'D#4', sound: require('./PianoDSHARP4.wav') },
  { note: 'E4', sound: require('./PianoE4.wav') },
  { note: 'F4', sound: require('./PianoF4.wav') },
  { note: 'F#4', sound: require('./PianoFSHARP4.wav') },
  { note: 'G4', sound: require('./PianoG4.wav') },
  { note: 'G#4', sound: require('./PianoGSHARP4.wav') },
  { note: 'A4', sound: require('./PianoA4.wav') },
  { note: 'A#4', sound: require('./PianoASHARP4.wav') },
  { note: 'B4', sound: require('./PianoB4.wav') },
  { note: 'C5', sound: require('./PianoC5.wav') }, // Second octave
  { note: 'C#5', sound: require('./PianoCSHARP5.wav') },
  { note: 'D5', sound: require('./PianoD5.wav') },
  { note: 'D#5', sound: require('./PianoDSHARP5.wav') },
  { note: 'E5', sound: require('./PianoE5.wav') },
  { note: 'F5', sound: require('./PianoF5.wav') },
  { note: 'F#5', sound: require('./PianoFSHARP5.wav') },
  { note: 'G5', sound: require('./PianoG5.wav') },
  { note: 'G#5', sound: require('./PianoGSHARP5.wav') },
  { note: 'A5', sound: require('./PianoA5.wav') },
  { note: 'A#5', sound: require('./PianoASHARP5.wav') },
  { note: 'B5', sound: require('./PianoB5.wav') },
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
<<<<<<< HEAD
        <h1>Virtual Piano</h1>
        <p>
          Try out our new piano and create your melodies with the unique sound
          of MusicNet.
        </p>
        <div>
=======
        <h1 style={{ margin: '0 0 20px 0' }}>Virtual Piano</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
>>>>>>> 6c6a0a03f9026e86cdf6c6569b5b5e9f711d1c22
          {pianoNotes.map((note) => (
            <button
              key={note.note}
              onClick={() => this.handleNoteClick(note)}
              style={
                note.note.includes('#')
                  ? {
                      ...blackKeyStyle,
<<<<<<< HEAD
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
=======
                      backgroundColor: this.state.activeNote === note.note ? '#ffffcc' : 'black',
                    }
                  : {
                      ...whiteKeyStyle,
                      backgroundColor: this.state.activeNote === note.note ? '#ffffcc' : 'white',
>>>>>>> 6c6a0a03f9026e86cdf6c6569b5b5e9f711d1c22
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




