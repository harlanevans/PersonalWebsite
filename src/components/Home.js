import React from 'react';
import { Header, Grid, } from 'semantic-ui-react';
import { Title } from '../styles/Style';
import Resume from '../documents/Resume.pdf';
import ModalImage from "react-modal-image";

class Home extends React.Component {
  state = {
    open: false,
    numPages: null,
    pageNumber: 1,
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  handleClick(e) {
    e.preventDefault();
    console.log("This button was clicked")
    // want to put resume pdf here in modal form
    // look at Terra Nova gallery stuff
  }

  render() {
    // const { open, dimmer, pageNumber, numPages } = this.state
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
              <div style={styles.centerButton}>
                <div style={styles.buttonGrid}>
                  <div class='focus-in-contract-bck'>
                    <div class='resume'>
                      <div style={styles.button}
                        onClick={this.show('blurring')}>
                        <a href={Resume} target="_blank">
                        Resume
                        </a>
                      </div>
                {/* <ModalImage 
                   small={Resume}
                  large={Resume}
                  stackable
                      /> */}
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
    cursor: 'pointer',
    // backgroundColor: 'rgba(0, 0, 0)',
    // border: 'black',
    padding: '20px',
    color: 'white',
    padding: "1px 20px",
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