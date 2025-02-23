// List of possible words for the Hangman game
export const words = ['react', 'javascript', 'developer', 'hangman', 'frontend'];
// Function to select a random word from the list
export const getRandomWord = () => words[Math.floor(Math.random() * words.length)];