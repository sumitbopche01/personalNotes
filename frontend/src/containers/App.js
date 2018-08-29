import React, { Component } from 'react';
import './App.css';
import Subjects from '../components/Subjects/Subjects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Here we start
        </p>
          <Subjects />
        
      </div>
    );
  }
}

export default App;
