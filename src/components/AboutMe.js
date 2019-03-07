import React from "react";
import { Header, Grid } from 'semantic-ui-react';
import { Title } from "../styles/Style";

const AboutMe = () => (
  <div>
    <div class='focus-in-expand'>
    <Title style={video.content}>
      About Me
    </Title>
    </div>
  <Grid>

  </Grid>
  </div>
)
export default AboutMe;

const video = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#f1f1f1',
    width: "100%",
    // padding: '20px',
    textShadow: '0.5px 0.5px black',
  },
}
