// Component to display Hangman image based on the number of wrong guesses
import React from 'react';
import state0 from '../assets/state0.gif';
import state1 from '../assets/state1.gif';
import state2 from '../assets/state2.gif';
import state3 from '../assets/state3.gif';
import state4 from '../assets/state4.gif';
import state5 from '../assets/state5.gif';
import state6 from '../assets/state6.gif';
import state7 from '../assets/state7.gif';
import state8 from '../assets/state8.gif';
import state9 from '../assets/state9.gif';
import state10 from '../assets/state10.gif';

const images = [state0, state1, state2, state3, state4, state5, state6, state7, state8, state9, state10];

const HangmanImage = ({ wrongGuesses }) => {
  return (
    <div>
      <img src={images[wrongGuesses]} alt="Hangman" className="hangman-image"/>
    </div>
  );
};

export default HangmanImage;