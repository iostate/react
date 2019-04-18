import React, {Component} from 'react';
// import logo from './logo.svg';
import appletopleft from './images/top-left.svg';
import applebottomleft from './images/bottom-right.svg';
import appletopright from './images/top-right.svg';
import applebottomright from './images/bottom-right.svg';
import './App.css';
import {addNumbers} from './logic/Math.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={nuggetrylogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    */}
        <header className="App-header" />
        <div className="apple-container">
          <img
            src={appletopleft}
            className="App-logo top-left centered"
            alt="logo"
          />
          <img
            src={applebottomleft}
            className="App-logo bottom-left centered"
            alt="logo"
          />
          <img
            src={appletopright}
            className="App-logo top-right centered"
            alt="logo"
          />
          <img
            src={applebottomright}
            className="App-logo bottom-right centered"
            alt="logo"
          />
        </div>
        <div>{addNumbers(2, 3)}ASDASDA</div>
        <div>
          IASDJIASDJIAJIJDASIO IASDJIASDJIAJIJDASIO IASDJIASDJIAJIJDASIO <br />
        </div>
      </div>
    );
  }
}

export default App;
