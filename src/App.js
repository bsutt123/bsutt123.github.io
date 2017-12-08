import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from  './components/Hero';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe />
      </div>
    );
  }
}

export default App;
