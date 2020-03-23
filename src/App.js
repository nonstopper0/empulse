import React from 'react';
<<<<<<< HEAD
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
=======
import {BroserRouter, Route, Switch, BrowserRouter} from 'react-router-dom'
import InstagramIcon from '../build/node_modules/@material-ui/icons/Instagram';
import YouTubeIcon from '../build/node_modules/@material-ui/icons/YouTube';
>>>>>>> parent of d1c5e6f... changes
import logo from './empulse.png'
import Home from './Home.js'

export default class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/empulse" component={Home} exact/>
          </Switch>
        <header style={styles.headercontainer}>
          <img src={logo} style={styles.logo} alt="empulse logo"></img>
          <nav style={styles.nav}>
            <a style={styles.navA} href="/empulse">HOME</a>
            <a style={styles.navA} target="_blank">ASSETTO CORSA</a>
            <a style={styles.navA} href='/empulse/team'>THE TEAM</a>
          </nav>
        </header>
      </BrowserRouter>
    );
  }
}

const styles = {
  headercontainer: {
    zIndex: 2,
    position: 'absolute',
    height: '60px',
    backgroundColor: 'rgb(0,0,0,.8)',
    width: '100%',
    top: 0,
  },
  logo: {
    position: 'relative',
    width: '135px',
    marginLeft: '5%',
    top: '-35px'
  },
  nav : {
    position: 'absolute',
    display: 'flex',
    top: 20,
    right: '3%',
    width: '400px',
  },
  navA : {
    textDecoration: 'none',
    fontSize: '17px',
    color: 'white',
    marginLeft: '35px'
  },
  p: {
    fontSize: '400px'
  },
}
