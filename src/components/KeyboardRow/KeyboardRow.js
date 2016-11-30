import React from 'react';

import Keybutton from '../Keybutton/Keybutton';

const KeyboardRow = props => {
  const { keys } = props;

  return (
    <div className="keyboard__row">
      { keys.map( (keyData, index) => <Keybutton key={index} keyData={keyData} />) }
    </div>
  );
};

export default KeyboardRow;
