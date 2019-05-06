import React from "react";
import { Header, Grid } from 'semantic-ui-react';
import { Title, ContactBody, } from '../styles/Style';

const PersonalLife = () => (
  <div>
    <div class="focus-in-expand">
      <Title textAlign="center" as="h1" style={styles.content}>
        Portfolio
      </Title>
      <ContactBody>
        <Grid columns={2} style={styles.grid} centered>
          <Grid.Row style={styles.seperate} textAlign="center">
            <Grid.Column textAlign="center" width={4}>
              <a href="https://sxexp.herokuapp.com/" target="">
                <div class="card-bigger">Southern Cross Expeditions</div>
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" width={4}>
              <a href="https://terranovacabins.herokuapp.com" target="blank">
                <div class="card-bigger">Terra Nova Cabins</div>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ContactBody>
    </div>
  </div>
);
export default PersonalLife;

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
    padding: "40px",
    margin: '10px',
  },
  columns: {
    padding: '10px',
    margin: '10px',
  },
  seperate: {
    padding: '10px',
  }
}