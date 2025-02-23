import React from 'react';

// Header component containing the game title and action buttons
const Header = ({ onHelp, onRestart }) => (
  <header className="header">
    <h1>Hangman Game</h1>
    <button onClick={onRestart}>Restart</button>
    <button onClick={onHelp}>Help</button>
  </header>
);
export default Header;