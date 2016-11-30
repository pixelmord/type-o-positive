import React from 'react';

import KeyboardRow from '../KeyboardRow/KeyboardRow';
import './Keyboard.css';

const Keyboard = props => {
  const { keyMap } = props;

  return (
    <div className="keyboard">
      { keyMap.rows.map( (row, index) => <KeyboardRow key={index} keys={row} />)  }
    </div>
  );
};

export default Keyboard;
