import React, { Component } from 'react';

import './App.css';


import Hero from  './components/Hero';
import AboutMe from './components/AboutMe';
import SkillsList from './components/SkillsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe />
        <SkillsList />
      </div>
    );
  }
}

export default App;
