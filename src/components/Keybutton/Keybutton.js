import React from 'react';

const Keybutton = props => {
  const { keyData } = props;
  let classes = [
    'keyboard__key'
  ];
  if (keyData.pressed > 0) {
    classes.push('keyboard__key--pressed');
  }
  return (
    <div className={classes.join(' ')}>
      { keyData.label }
    </div>
  );
};

export default Keybutton;
