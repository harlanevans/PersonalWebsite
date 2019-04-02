import React from "react";
import { Header, Grid, Container } from 'semantic-ui-react';
import { Title, ContactBody } from "../styles/Style";

const AboutMe = () => (
  <div>
    <div class='focus-in-contract'>
    <Title style={styles.content}>
      About Me
    </Title>
    <Container>
  <Grid centered style={styles.grid}>
    <ContactBody>
      <Grid.Row>
      Born and raised in Salt Lake City, UT, 
      </Grid.Row>
      <Grid.Row>
      and the youngest of five, Harlan has always had to struggle to survive.
      </Grid.Row>
      <Grid.Row>
        But now, he has the strenghts of a Full-Stack Web Developer
      </Grid.Row>
      <Grid.Row>
        to take on his strongest opponents, and to retake his rightful place on the computer.
      </Grid.Row>
    </ContactBody>
  </Grid>
    </Container>
    </div>
  </div>
)
export default AboutMe;

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#f1f1f1',
    width: "100%",
    // padding: '20px',
    textShadow: '0.5px 0.5px black',
  },
  grid: {
    padding: '40px',
  }
}
