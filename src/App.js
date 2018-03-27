import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import asyncComponent from './components/AsyncComponent';
import FixedNav from './components/FixedNav';

const AsyncHero = asyncComponent(() => import('./components/Hero'));
const AsyncAboutMe =  asyncComponent(() => import('./components/AboutMe'));
const AsyncSkillsList = asyncComponent(() => import('./components/SkillsList'));
const AsyncProjects =  asyncComponent(() => import('./components/Projects'));
const AsyncBlog = asyncComponent(() => import('./components/Blog'))


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <FixedNav />
            <Route exact path="/" component={AsyncHero} />
            <Route path="/about-me" component={AsyncAboutMe} />
            <Route path="/skills" component={AsyncSkillsList} />
            <Route path="/projects" component={AsyncProjects} />
            <Route path="/blog" component={AsyncBlog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
