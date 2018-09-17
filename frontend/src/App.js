import React, { Component } from 'react';

import './App.css';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  
  render() {
    console.log("inside the app.js");
    return (
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;
