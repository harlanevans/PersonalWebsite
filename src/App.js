import React, { Fragment, } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
// import videoSource from './assets/rain_two.mp4';
// import Player from './components/Player';
import './App.css';
import './index.css';
// import { Video, } from './styles/Style';


class App extends React.Component {
  render() {
    return (

      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/hobbies' component={Hobbies} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;

const text = {
  fontFamily: "'Merriweather', serif",
}

const background = {
  position: "fixed",
  right: '0',
  bottom: '0',
  minWidth: "100%",
  minHeight: "100%",
}
