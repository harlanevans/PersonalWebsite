import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { activeItem: "" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
        <Menu inverted secondary style={menu}>
            <div class="active">
        <div class="nav">
          <Link to="/">
            <Menu.Item
              style={text}
              name="home"
              onClick={this.handleItemClick}
              active={activeItem === "home"}
              >
              Home
            </Menu.Item>
          </Link>
        </div>
              </div>
        <Menu.Menu position="right">
          <div class="nav">
            <Link to="/portfolio">
              <Menu.Item
                style={text}
                name="portfolio"
                onClick={this.handleItemClick}
                active={activeItem === "portfolio"}
              >
                Portfolio
              </Menu.Item>
            </Link>
          </div>
          <div class="nav">
            <Link to="/aboutme">
              <Menu.Item
                style={text}
                name="aboutme"
                onClick={this.handleItemClick}
                active={activeItem === "aboutme"}
              >
                About Me
              </Menu.Item>
            </Link>
          </div>
          <div class="nav">
            <Link to="/contact">
              <Menu.Item
                style={text}
                name="contact"
                onClick={this.handleItemClick}
                active={activeItem === "contact"}
              >
                Contact
              </Menu.Item>
            </Link>
          </div>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default Navbar;

const menu = {
  fontSize: "20px ",
  textShadow: "1px 1px black",
  backgroundColor: "rgba(0, 0, 0, 0.75 )",
  fontWeight: "100"
  // position: 'fixed',
};

const text = {
  fontWeight: "lighter"
};
