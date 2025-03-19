import React from 'react';

// Component that renders an on-screen keyboard for selecting letters
const Keyboard = ({ onLetterClick, guessedLetters, gameOver }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button 
          key={letter} 
          onClick={() => onLetterClick(letter)} 
          disabled={guessedLetters.includes(letter) || gameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;