import React from 'react';

const Keybutton = props => {
  const { keyData } = props;
  let classes = [
    'keyboard__key'
  ];
  let keyLabels = [];
  const keyWidth = (typeof keyData.width !== 'undefined') ? keyData.width * 3.5 : 3.5;
  if (keyData.pressed > 0) {
    classes.push('keyboard__key--pressed');
  }

  if (typeof keyData.label_left_top !== 'undefined') {
    keyLabels.push(<span key="left_top" className={'keyboard__key__label keyboard__key__label--left-top'}>{keyData.label_left_top}</span>);
  }

  if (typeof keyData.label_left_middle !== 'undefined') {
    keyLabels.push(<span key="left_middle" className={'keyboard__key__label keyboard__key__label--left-middle'}>{keyData.label_left_middle}</span>);
  }

  if (typeof keyData.label_left_bottom !== 'undefined') {
    keyLabels.push(<span key="left_bottom" className={'keyboard__key__label keyboard__key__label--left-bottom'}>{keyData.label_left_bottom}</span>);
  }

  if (typeof keyData.label_center_top !== 'undefined') {
    keyLabels.push(<span key="center_top" className={'keyboard__key__label keyboard__key__label--center-top'}>{keyData.label_center_top}</span>);
  }

  if (typeof keyData.label_center_middle !== 'undefined') {
    keyLabels.push(<span key="center_middle" className={'keyboard__key__label keyboard__key__label--center-middle'}>{keyData.label_center_middle}</span>);
  }

  if (typeof keyData.label_center_bottom !== 'undefined') {
    keyLabels.push(<span key="center_bottom" className={'keyboard__key__label keyboard__key__label--center-bottom'}>{keyData.label_center_bottom}</span>);
  }

  if (typeof keyData.label_right_top !== 'undefined') {
    keyLabels.push(<span key="right_top" className={'keyboard__key__label keyboard__key__label--right-top'}>{keyData.label_right_top}</span>);
  }

  if (typeof keyData.label_right_middle !== 'undefined') {
    keyLabels.push(<span key="right_middle" className={'keyboard__key__label keyboard__key__label--right-middle'}>{keyData.label_right_middle}</span>);
  }

  if (typeof keyData.label_right_bottom !== 'undefined') {
    keyLabels.push(<span key="right_bottom" className={'keyboard__key__label keyboard__key__label--right-bottom'}>{keyData.label_right_bottom}</span>);
  }

  return (
    <div className={classes.join(' ')} style={{width: keyWidth + 'rem'}}>
      { keyLabels.map(label => label) }
    </div>
  );
};

export default Keybutton;
