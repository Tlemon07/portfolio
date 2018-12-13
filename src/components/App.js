import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import AboutMe from './AboutMe';
import Project from './Project';
import Home from './Home';
import NavigationBar from './NavigationBar';
import { GlobalStyle } from '../theme/globalStyles'

class App extends Component {
  render() {
    return (
      <div>
      <GlobalStyle />
      <NavigationBar />
      <Switch>
        <Route exact path='/portfolio' component={Home} />
        <Route path='/portfolio/aboutMe' component={AboutMe} />
        <Route path='/portfolio/projects' component={Project} />
      </Switch>
      </div>
    );
  }
}

export default App;