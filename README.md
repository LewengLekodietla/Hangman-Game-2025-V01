# Hangman Game - React Capstone Project

## Description
This is a simple Hangman game built using React. The game challenges users to guess a hidden word, letter by letter, before exceeding the maximum number of incorrect attempts.

## Features
- Random word selection from a predefined word list.
- Interactive keyboard for letter selection.
- Displays progress with correctly guessed letters.
- Winning and losing conditions are clearly indicated.
- A restart button to reset the game.
- A help modal explaining the game rules.
- Responsive and user-friendly design.

## Game Rules
1. A random word is selected at the start of the game.
2. The word is displayed as underscores, with each underscore representing a letter.
3. The player selects letters using the on-screen keyboard.
4. If the selected letter is in the word, it will be revealed in the correct position.
5. If the letter is incorrect, it counts as a wrong guess.
6. The player has a limited number of wrong guesses (e.g., 6) before losing.
7. If the player correctly guesses all the letters before running out of attempts, they win.
8. The game provides an option to restart at any time.

## Installation and Running the App

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm (Comes with Node.js)

### Steps to Install and Run Locally
1. **Clone the repository:**
   ```sh
   git clone <your-github-repo-url>
   ```
2. **Navigate to the project directory:**
   ```sh
   cd hangman-game
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm start
   ```
5. **Open the game in your browser:**
   - The app will usually be available at `http://localhost:3000/`.

## Deployment
To deploy the app, run the following command to build the project:
```sh
npm run build


#Hangman-Game-2025-V01
