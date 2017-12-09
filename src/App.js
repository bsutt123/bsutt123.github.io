import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';



import Hero from  './components/Hero';
import AboutMe from './components/AboutMe';
import SkillsList from './components/SkillsList';
import FixedNav from './components/FixedNav';
import CaseStudies from './components/CaseStudies';
import Projects from './components/Projects';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <FixedNav />
            <Route exact path="/" component={Hero} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/skills" component={SkillsList} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
