// Main application component that integrates all game functionalities
import React, { useState, useEffect } from 'react';
import HangmanImage from './components/HangmanImage';
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
  const [gameOver, setGameOver] = useState(false);
  const maxWrongGuesses = 10; 

  // Effect to check if the game is over
  useEffect(() => {
    if (wrongGuesses >= maxWrongGuesses) {
      setGameOver(true);
    }
  }, [wrongGuesses]);

  // Handles letter selection by user
  const handleLetterClick = (letter) => {
    if (gameOver || guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) setWrongGuesses(wrongGuesses + 1);
  };

  // Resets the game state
  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <Header onHelp={() => setShowHelp(true)} onRestart={restartGame} />
      <HangmanImage wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} gameOver={gameOver}/>
      <GameStatus word={word} guessedLetters={guessedLetters} wrongGuesses={wrongGuesses} gameOver={gameOver} />
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
};

export default App;
