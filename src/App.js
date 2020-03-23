import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import InstagramIcon from '../build/node_modules/@material-ui/icons/Instagram';
import YouTubeIcon from '../build/node_modules/@material-ui/icons/YouTube';
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
            <a style={styles.navA} href='/empulse/team'>THE GARAGE</a>
            <a><InstagramIcon style={styles.icon}></InstagramIcon></a>
            <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank"><YouTubeIcon style={styles.icon}></YouTubeIcon></a>
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
    width: '100%',
    backgroundColor: 'rgb(0,0,0,.7)',
    top: 0,
    minWidth: '1000px'
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
    width: '500px',
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
  icon: {
    color: 'white',
    fontSize: '20px',
    marginLeft: '35px'
  }
}
