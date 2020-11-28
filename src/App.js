import React from 'react';
import './App.css'
import {Route, HashRouter, Link} from 'react-router-dom'
import logo from './empulse.png'
import Home from './Home.js'
import Team from './Team.js'
import Download from './Download.js'
import Gallery from './Gallery.js'
import { FaDiscord, FaYoutube } from 'react-icons/fa'

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
        <header className="header-container">
          <img src={logo} className="logo" alt="empulse logo"></img>
          <nav>
              <p className="navitem" ><Link to="/" className="link">HOME</Link></p>
              <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
                  { this.state.hover ? 
                  <div className="menu">
                      <p className="navB navitem" ><Link to="/ac/download" className="link">DOWNLOAD</Link></p>
                      <p className="navB navitem" ><Link to="/ac/gallery"  className="link">GALLERY</Link></p>
                  </div> 
                  : 
                  null
                  }
                  <p className="navitem navA">ASSETTO <span style={{color: 'red'}}>CORSA</span></p>
              </div>
              <p className="navitem navA"><Link to="/team" className="link">THE GARAGE</Link></p>
              <a href="https://discord.gg/j6EMR5r" target="_blank" rel="noopener noreferrer"><FaDiscord className="icon"></FaDiscord></a>
              <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon"></FaYoutube></a>
          </nav>
        
        </header>
        <footer>
          <small>&copy; Copyright 2020. Nathaniel Redmon</small>
          <div style={{width: '100%'}}>
            <a href="https://discord.gg/j6EMR5r" target="_blank" rel="noopener noreferrer"><FaDiscord className="footer-icon"></FaDiscord></a>
            <a href="https://www.youtube.com/channel/UCA2BhFhrsyvPXxEuUuQpBMw?view_as=subscriber" target="_blank" rel="noopener noreferrer"><FaYoutube className="footer-icon"></FaYoutube></a>
          </div>
        </footer>
    </HashRouter>
    );
  }
}

const styles = {
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
    marginTop: '80px',
    height: '100px',
    padding: '100px 0px 100px 0px',
    backgroundColor: 'rgb(0,0,0,.2)',
    minWidth: '1000px',
    textAlign: 'center',
    color: 'grey',
    boxShadow: '0px 0px 80px rgb(0,0,0,.4)',
  },
  footerIcon: {
    fontSize: 30,
    margin: '20px 10px 40px 10px',
    color: 'rgb(100,100,100)',
    backgroundColor: 'rgb(38,38,38)',
    padding: 10,
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
    backgroundColor: 'rgb(28,28,28)',
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
