import React, { Fragment, } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import PersonalLife from './components/PersonalLife';
import Hobbies from './components/Hobbies';

import Player from './components/Player';
import './App.css';


class App extends React.Component {
  render() {
    return (

      <Fragment>
        <Player>

        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/personallife' component={PersonalLife} />
          <Route exact path='/hobbies' component={Hobbies} />
        </Switch>
        </Player>
      </Fragment>
    )
  }
}

export default App;

const text = {
  fontFamily: "'Merriweather', serif",
}
