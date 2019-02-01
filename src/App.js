import React, { Fragment, } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import PersonLife from './components/PersonalLife';
import Hobbies from './components/Hobbies';


const App = () => (
  <Fragment>
    <Switch>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/personallife' component={PersonLife} />
      <Route exact path='/hobbies' component={Hobbies} />
    </Switch>
  </Fragment>
)

export default App;
