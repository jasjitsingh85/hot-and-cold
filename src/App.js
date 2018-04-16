import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GuessBox from './guess-box.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuessBox />
      </div>
    );
  }
}

export default App;
