import React from 'react';
import {BroserRouter, Route, Switch, BrowserRouter} from 'react-router-dom'
import './App.css'
import logo from './empulse.png'
import Home from './Home.js'

export default class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <header style={styles.headercontainer}>
          <img src={logo} style={styles.logo} alt="empulse logo"></img>
          <nav style={styles.nav}>
            <a style={styles.navA} href="/empulse">HOME</a>
            <a style={styles.navA} target="_blank">ASSETTO CORSA</a>
            <a style={styles.navA} href='/empulse/team'>THE TEAM</a>
          </nav>
          <Switch>
            <Route path="/empulse" component={Home} exact/>
          </Switch>
        </header>
      </BrowserRouter>
    );
  }
}

const styles = {
  headercontainer: {
    'z-index': 2,
    position: 'absolute',
    backgroundColor: 'rgb(0,0,0,.1)',
    height: '60px',
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
    color: 'rgb(200,200,200)',
    marginLeft: '35px'
  },
  p: {
    fontSize: '400px'
  },
}
