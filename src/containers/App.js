import React, { Component } from 'react';
import keydown from 'react-keydown';

import keyboard from '../keyboard.svg';
import './App.css';
import Keyboard from '../components/Keyboard/Keyboard';

class App extends Component {
  componentWillReceiveProps( ) {
    const { keydown, incrementKeypress } = this.props;
    if ( keydown.event ) {
      // inspect the keydown event and decide what to do
      console.log( keydown.event.key , typeof keydown.event.key);
      keydown.event.preventDefault();
      incrementKeypress(keydown.event.key);
    }
  }

  render() {
    const { keyMap } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={keyboard} className="App-logo" alt="logo" />
          <h2>Type - O - Positive</h2>
        </div>
        {React.cloneElement(this.props.children, this.props)}
        <Keyboard keyMap={keyMap} />
      </div>
    );
  }
}

export default keydown(App);
