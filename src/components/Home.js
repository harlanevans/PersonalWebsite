import React from 'react';
import { Header, } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

const Home = () => (
  <div>
  <Header textAlign="center" as='h1' style={styles.content}>
    Harlan Evans
  </Header>
  </div>
)
export default Home;

const styles = {
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