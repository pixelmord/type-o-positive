import React, { Component } from 'react';
import keydown from 'react-keydown';

import logo from '../logo.svg';
import './App.css';
import Keyboard from '../components/Keyboard/Keyboard';
import { getKeyMap } from '../services/keyMapService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyMap: getKeyMap()
    };
  }
  componentWillReceiveProps( { keydown } ) {
    if ( keydown.event ) {
      // inspect the keydown event and decide what to do
      console.log( keydown.event.key , typeof keydown.event.key);
      keydown.event.preventDefault();
      this.state = {
        keyMap: this.state.keyMap.rows.map(row => {
          return row.map(keyData => {
            keyData.pressed = (keydown.event.key === keyData.id) ? keyData.pressed + 1 : keyData.pressed;
            return keyData;
          })
        }),
        ...this.state,
      };
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Keyboard keyMap={this.state.keyMap} />
      </div>
    );
  }
}

export default keydown(App);
