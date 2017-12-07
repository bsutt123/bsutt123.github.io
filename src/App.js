import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from  './components/Title';
import AboutMe from './components/AboutMe';
import CompletedProjects from './components/CompletedProjects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <AboutMe />
        <CompletedProjects />
      </div>
    );
  }
}

export default App;
