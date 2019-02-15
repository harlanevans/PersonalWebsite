import React from "react";
import { Header, } from 'semantic-ui-react';

const AboutMe = () => (
    <Header as='h1' textAlign="center" style={video.content}>
      About Me
    </Header>
)
export default AboutMe;

const video = {
  content: {
    position: 'fixed',
    top: '50',
    // background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    width: "100%",
    padding: '20px',
    fontSize: '50px',
    textShadow: '1px 1px black',
    fontFamily: "'Merriweather', serif",
  },
}
