import React, { Component } from 'react';
import './App.css';
import Number from "./Number";
import Buttons from './Buttons';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Number number={store.getState().number}/>
        <Buttons buttonsType={['+', '-', 'clear']}/>
      </div>
    );
  }
}

export default App;
