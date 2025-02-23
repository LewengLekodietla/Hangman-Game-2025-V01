// Main application component that integrates all game functionalities
import React, { useState } from 'react';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import GameStatus from './components/GameStatus';
import HelpModal from './components/HelpModal';
import { getRandomWord } from './words';
import './styles/App.css';

const App = () => {
  // State variables to manage the game
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  // Handles letter selection by user
  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) setWrongGuesses(wrongGuesses + 1);
  };

  // Resets the game state
  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <div className="game-container">
      <Header onHelp={() => setShowHelp(true)} onRestart={restartGame} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
      <GameStatus word={word} guessedLetters={guessedLetters} wrongGuesses={wrongGuesses} />
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
};

export default App;
