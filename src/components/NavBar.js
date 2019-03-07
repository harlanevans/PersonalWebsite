import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const Navbar = () => (
  <Menu inverted secondary style={menu}>
        <div class='nav'>
      <Link to='/'>
          <Menu.Item style={text}>
            Home
    </Menu.Item>
      </Link>
        </div>
    <Menu.Menu position='right'>
      <div class='nav'>
    <Link to='/portfolio'>
        <Menu.Item style={text}>
          Portfolio
    </Menu.Item>
    </Link>
      </div>
      <div class='nav'>
    <Link to='/aboutme'>
        <Menu.Item style={text}>
          About Me
    </Menu.Item>
    </Link>
      </div>
      <div class='nav'>
    <Link to='/contact'>
        <Menu.Item style={text}>
          Contact
    </Menu.Item>
    </Link>
      </div>
  </Menu.Menu>
  </Menu>
)
export default Navbar;

const menu = {
  fontSize: '20px ',
  textShadow: '1px 1px black',
  backgroundColor: "rgba(0, 0, 0, 0.75 )",
  fontWeight: '100',
  // position: 'fixed',
}

const text = {
  fontWeight: 'lighter',
}
