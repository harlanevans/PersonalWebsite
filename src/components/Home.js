import React from 'react';
import { Header, } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
// import backgroundvideo from '../video/backgroundvideo.mp4'

const Home = () => (
  <div>
  <Header textAlign="center" as='h1'>
    Harlan Evans
  </Header>
  </div>
)
export default Home;

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