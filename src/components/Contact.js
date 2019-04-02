import React from "react";
import { Title, ContactBody } from "../styles/Style";
import { Grid, Container} from 'semantic-ui-react';

const Contact = () => (
  <div>
    <div class='focus-in-expand'>
    <Title textAlign='center' as='h1' style={styles.content}>
      Contact Me
  </Title>
    </div>
    <div class='focus-in-expand'>
    <ContactBody>
    <Grid columns={3} centered style={styles.grid}>
          <Grid.Row textAlign='center' style={styles.seperate}>
            <Grid.Column textAlign='center' style={styles.card} width={4}>
              <Grid.Row>
                <a href='mailto:harlanevans5@gmail.com' target='blank'>
            <div class='card-bigger'>
                Email Me
            </div>
                </a>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column textAlign='center' style={styles.card} width={4}>
              <Grid.Row style={styles.href}>
                  <a href='https://github.com/harlanevans' target='blank'>
            <div class='card-bigger'>
                  Github
            </div>
                  </a>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column textAlign='center' style={styles.card} width={4}>
              <Grid.Row style={styles.href}>
                  <a href="https://www.linkedin.com/in/harlan-evans-b08027156/" target="blank">
                <div class='card-bigger'>
                  LinkedIn
            </div>
                  </a>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
    </Grid>
    </ContactBody>
  </div>
  </div>
)
export default Contact;

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#f1f1f1',
    width: "100%",
    paddingBottom: '20px',
    textShadow: '0.5px 0.5px black',
  },
  grid: {
    padding: "40px",
    margin: '10px',
  },
  href: {
    color: 'white',
  },
  card: {
    // backgroundColor: 'rgba(10, 10, 10, 0.6)',
    // padding: '30px',
    // margin: '10px',
  },
  seperate: {
    padding: '10px',
  }
}

