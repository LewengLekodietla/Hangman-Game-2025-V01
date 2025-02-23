// Utility function to check the game's status
// Returns a message based on the number of wrong guesses and guessed letters
export const checkGameStatus = (word, guessedLetters, wrongGuesses) => {
    const maxWrongGuesses = 6;
    if (wrongGuesses >= maxWrongGuesses) return 'You lost! The word was ' + word;
    if (word.split('').every(letter => guessedLetters.includes(letter))) return 'You won!';
    return 'Keep guessing!';
  };