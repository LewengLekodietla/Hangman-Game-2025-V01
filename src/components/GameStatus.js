import React from 'react';

// Component that displays the current game status (win, lose, or ongoing)
import { checkGameStatus } from '../utils';
const GameStatus = ({ word, guessedLetters, wrongGuesses }) => {
  const status = checkGameStatus(word, guessedLetters, wrongGuesses);
  return <div className="game-status">{status}</div>;
};
export default GameStatus;