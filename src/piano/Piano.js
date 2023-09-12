import React, { Component } from 'react';

// Define your piano notes and import the corresponding sound files
const pianoNotes = [
  { note: 'C4', sound: require('./PianoA.wav') },
  // Add more notes here
];

const buttonStyle = {
  width: '60px',
  height: '200px',
  margin: '5px',
  fontSize: '18px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#ffcc00',
};

class Piano extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: null,
    };
  }

  // Handle button click to play the note
  handleNoteClick = (note) => {
    const audio = new Audio(note.sound.default);
    audio.play();
    this.setState({ activeNote: note.note });
  };

  render() {
    return (
      <div>
        <h1>Virtual Piano</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {pianoNotes.map((note) => (
            <button
              key={note.note}
              onClick={() => this.handleNoteClick(note)}
              style={
                this.state.activeNote === note.note
                  ? activeButtonStyle
                  : buttonStyle
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
