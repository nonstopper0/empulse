import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logo from './empulse.png'
import Home from './Home.js'
import Team from './Team.js'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hover: false
    }
  }
  handleMouse = () => {
    this.setState({
        hover: !this.state.hover
    })
  }
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/empulse" component={Home} exact/>
            <Route path="/empulse/team" component={Team} exact/>
          </Switch>
        <header style={styles.headercontainer}>
          <img src={logo} style={styles.logo} alt="empulse logo"></img>
          <nav className='nav' style={styles.nav}>
            <a className="navitem" style={styles.navA} href="/empulse">HOME</a>
            <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
              { this.state.hover ? <div className='menu' style={styles.menu}></div> : null}
              <a className="navitem" style={styles.navA} target="_blank">ASSETTO CORSA</a>
            </div>
            <a className="navitem" style={styles.navA} href='/empulse/team'>THE GARAGE</a>
            <a><InstagramIcon style={styles.icon}></InstagramIcon></a>
            <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank"><YouTubeIcon style={styles.icon}></YouTubeIcon></a>
          </nav>
        
        </header>
        <footer style={styles.footer}>
          <small>&copy; Copyright 2020. Empulse Racing</small>
        </footer>
      </BrowserRouter>
    );
  }
}

const styles = {
  headercontainer: {
    zIndex: 2,
    position: 'absolute',
    height: '60px',
    backgroundColor: 'rgb(28,28,28)',
    width: '100%',
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
    width: '550px',
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
  icon : {
    color: 'white',
    fontSize: 20,
    marginLeft: '35px',
  },
  footer: {
    height: '100px',
    padding: '100px',
    minWidth: '1000px',
    textAlign: 'center',
    color: 'grey'
  },
  menu: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'white',
    height: '400px',
    width: '300px',
  }
}
