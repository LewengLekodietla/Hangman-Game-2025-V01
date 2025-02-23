import React from 'react';

// A modal component that displays game instructions
const HelpModal = ({ onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <h2>How to Play</h2>
      <p>Guess the word letter by letter. Too many wrong guesses and you lose!</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);
export default HelpModal;