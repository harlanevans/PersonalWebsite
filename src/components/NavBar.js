import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const Navbar = () => (
  <Menu inverted secondary style={text}>
    <Link to='/aboutme'>
    <Menu.Item>
      About Me
    </Menu.Item>
    </Link>
    <Link to='/contact'>
    <Menu.Item>
      Contact
    </Menu.Item>
    </Link>
    <Link to='/hobbies'>
    <Menu.Item>
      Hobbies
    </Menu.Item>
    </Link>
    <Link to='/personallife'>
    <Menu.Item>
      Personal Life
    </Menu.Item>
    </Link>
    <Menu.Menu  position='right'>

    <Link to='/'>
    <Menu.Item>
      Home
    </Menu.Item>
    </Link>
    </Menu.Menu>
  </Menu>
)
export default Navbar;

const text = {
  fontFamily: "'Merriweather', serif",
  fontSize: '20px ',
  textShadow: '1px 1px black',
  // position: 'fixed',
}