import React from 'react';
import { NavLink, } from 'react-router-dom'
import { Header, Button, Grid, } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { Title } from '../styles/Style';

class Home extends React.Component {


  handleClick(e) {
    e.preventDefault();
    console.log("This button was clicked")
    // want to put resume pdf here in modal form
    // look at Terra Nova gallery stuff
  }

  render() {
    return (
      <div>
    <div class='focus-in-contract-faster'>
        <Title style={styles.content}>
          Harlan Evans
    </Title>
        </div>
        <Grid columns={1}>
          <Grid.Column>
            <Grid.Row style={styles.row}>
        <div class='focus-in-contract'>
        <Header textAlign='center' as='h1' style={styles.subHeader}>
            Developer
        </Header>
        </div>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
    <div style={styles.centerButton}>
          <div style={styles.buttonGrid}>
          <div class='focus-in-contract-bck'>
          <div class='resume'>
            <NavLink 
            to='/resume' 
            style={styles.button}
            onClick={this.handleClick}
            >
              Resume
    </NavLink>
            </div>
            </div>
          </div>
        </div>
              </Grid.Row>
              </Grid.Column>
              </Grid>
      </div>

    )
  }
}

export default Home;

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
  button: {
    // backgroundColor: 'rgba(0, 0, 0)',
    // border: 'black',
    padding: '20px',
    color: 'white',
    // padding: "10px 25px",
    textAlign: 'center',
    textDecoration: "none",
    // display: "inline - block",
    fontSize: '25px',
    fontWeight: 'lighter',
  },
  buttonGrid: {
    display: 'flex',
    flexPosition: 'column',
    alignContent: 'center',
    alignItem: 'center',
  },
  centerButton: {
    display: 'flex',
    flexPosition: 'row',
    justifyContent: 'center',
    padding: '20px',
  },
  subHeader: {
    color: '#f1f1f1',
    width: "100%",
    fontSize: '80px',
    textShadow: '1px 1px black',
    fontWeight: 'lighter',
    margin: '-1px',
    // padding: '20px',
  },
  row: {
    padding: '30px',
  }
}