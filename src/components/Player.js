import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import videoSource from '../assets/rain_two.mp4';

class Video extends React.Component {
  
  render() {
    return(

      <Player
        style={video.mp4}
        autoPlay={true}
        loop={true}
      >
        <ControlBar disabled />
        <BigPlayButton disabled />
        <source src={videoSource} type="video/mp4" />
      </Player>
    )
  }
}
export default Video;


const video = {
  mp4: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    marginTop: '-50px',
  }
}
