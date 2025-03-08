// Component to display Hangman image based on the number of wrong guesses
import React from 'react';
import state1 from '../assets/state1.GIF';
import state2 from '../assets/state2.GIF';
import state3 from '../assets/state3.GIF';
import state4 from '../assets/state4.GIF';
import state5 from '../assets/state5.GIF';
import state6 from '../assets/state6.GIF';
import state7 from '../assets/state7.GIF';
import state8 from '../assets/state8.GIF';
import state9 from '../assets/state9.GIF';
import state10 from '../assets/state10.GIF';
import state11 from '../assets/state11.GIF';

const images = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11];

const HangmanImage = ({ wrongGuesses }) => {
  return <img src={images[wrongGuesses]} alt={`Hangman state ${wrongGuesses}`} className="hangman-image" />;
};

export default HangmanImage;