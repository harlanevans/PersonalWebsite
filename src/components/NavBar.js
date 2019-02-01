import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const Navbar = () => (
  <Menu>
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
  </Menu>
)
export default Navbar;