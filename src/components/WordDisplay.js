import React from 'react';

// Component that displays the guessed word, showing underscores for unguessed letters
const WordDisplay = ({ word, guessedLetters }) => (
  <div className="word-display">
    {word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ))}
  </div>
);
export default WordDisplay;