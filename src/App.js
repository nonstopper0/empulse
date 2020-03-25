import React from 'react';
import {Route, Switch, HashRouter, BrowserRouter, Link} from 'react-router-dom'
import logo from './empulse.png'
import Home from './Home.js'
import Team from './Team.js'
import Download from './Download.js'
import Gallery from './Gallery.js'
import { FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa'

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
      <HashRouter basename="/">
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={Team}/>
            <Route exact path="/ac/download" component={Download}/>
            <Route exact path="/ac/gallery" component={Gallery}/>
        <header style={styles.headercontainer}>
          <img src={logo} style={styles.logo} alt="empulse logo"></img>
          <nav className='nav' style={styles.nav}>
              <p className="navitem" style={styles.navA}><Link to="/" style={styles.link}>HOME</Link></p>
              <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
                  { this.state.hover ? 
                  <div className='menu' style={styles.menu}>
                      <p className="navB" style={styles.navB}><Link to="/ac/download" style={styles.link}>DOWNLOAD</Link></p>
                      <p className="navB" style={styles.navB}><Link to="/ac/gallery" style={styles.link}>GALLERY</Link></p>
                  </div> 
                  : 
                  null
                  }
                  <p className="navitem" style={styles.navA} target="_blank">ASSETTO <span style={{color: 'red'}}>CORSA</span></p>
              </div>
              <p className="navitem" style={styles.navA}><Link to="/team" style={styles.link}>THE GARAGE</Link></p>
              <a><FaInstagram style={styles.icon}></FaInstagram></a>
              <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank"><FaYoutube style={styles.icon}></FaYoutube></a>
          </nav>
        
        </header>
        <footer style={styles.footer}>
          <small>&copy; Copyright 2020. Nathaniel Redmon</small>
          <div style={{width: '100%'}}>
            <a><FaInstagram style={styles.footerIcon}></FaInstagram></a>
            <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank"><FaYoutube style={styles.footerIcon}></FaYoutube></a>
          </div>
        </footer>
    </HashRouter>
    );
  }
}

const styles = {
  headercontainer: {
    zIndex: 2,
    position: 'fixed',
    height: '60px',
    backgroundColor: 'rgb(38,38,38)',
    width: '100%',
    top: 0,
    minWidth: '1000px',
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
    top: 3,
    right: '3%',
    width: '550px',
    alignItems: 'center'
  },
  navA : {
    textDecoration: 'none',
    fontSize: '17px',
    marginLeft: '35px',
  },
  navB : {
    textDecoration: 'none',
    fontSize: '17px',
    width: '100%',
    margin: '3px'
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
    margin: '0 auto',
    height: '100px',
    paddingTop: '100px',
    minWidth: '1000px',
    textAlign: 'center',
    color: 'grey',
  },
  footerIcon: {
    fontSize: 30,
    margin: '20px 10px 40px 10px',
    color: 'rgb(100,100,100)',
    backgroundColor: 'rgb(38,38,38)',
    padding: 7,
    borderRadius: 100,
  },
  menu: {
    paddingTop: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'flex-start',
    top: 35,
    left: 115,
    backgroundColor: 'rgb(38,38,38)',
    height: '60px',
    width: '160px',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: 5
  },
  link: {
    textDecoration: 'none', 
    color: 'white',
  }
}
