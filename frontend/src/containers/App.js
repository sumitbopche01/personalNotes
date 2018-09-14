import React, { Component } from 'react';
import './App.css';
import Subjects from '../components/Subjects/Subjects';
import Navigation from '../components/Navigation/Navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Subjects />
        
      </div>
    );
  }
}

export default App;
