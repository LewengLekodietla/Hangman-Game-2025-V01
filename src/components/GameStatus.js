import React from 'react';

// Component that displays the current game status (win, lose, or ongoing)
const GameStatus = ({ word, guessedLetters, wrongGuesses, gameOver }) => {
  const isWinner = word.split('').every(letter => guessedLetters.includes(letter));
  const maxWrongGuesses = 10;

  let statusMessage = 'Keep guessing!';
  if (gameOver) {
    statusMessage = `Game Over! The word was: ${word}`;
  } else if (isWinner) {
    statusMessage = 'Congratulations! You won!';
  }

  return <div className="game-status">{statusMessage}</div>;
};
export default GameStatus;