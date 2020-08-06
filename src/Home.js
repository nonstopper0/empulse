import React from 'react';
import img from './varis.jpg'
import logo from './empulse.png'
import drift from './drift.jpg'
import gridlife from './gridlife.jpg'
import fullsize from './fullsize.jpg'
import { FaAngleDoubleRight, FaFlagCheckered, FaDiscord} from 'react-icons/fa'
import { MdExpandMore } from 'react-icons/md'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll;

export default class Team extends React.Component {
    constructor() {
        super()
        this.state ={
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
            <div style={{minWidth: '1000px', }}>
                <div style={styles.container}>
                    <img src={img} id="img"  alt="background" style={styles.img}></img>
                    <div style={styles.maintext}>
                        <img alt="main logo" className="logohover" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} style={styles.logo} src={logo}></img>
                        { !this.state.hover ? <p className="popin" style={styles.popup}>Driver focused, People oriented...</p> : null}
                    </div>
                    <div onClick={()=>scroll.scrollTo(document.getElementById('img').clientHeight-60)} style={{position: 'absolute', top: '94%', left: '50%', color: 'white', transform: 'translate(-50%)'}}><MdExpandMore style={{fontSize: 40}}/></div>
                </div>
                <div style={styles.content1}>
                <div className="bar" style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '1500px'}}></div>
                    <div style={styles.row}>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <img src={gridlife} style={{width: '400px', marginRight: '20px', paddingLeft: 20, borderLeft: '2px solid white'}} alt="drift"></img>
                            <div>
                                <h2 style={{color: 'white', fontWeight: 'bold'}}>A team focused on Motorsport.<FaFlagCheckered style={{position: 'relative', top: 2, left: 10, fontSize: 20, color: 'grey'}}></FaFlagCheckered></h2>
                                <p style={styles.contentText}>Based in Colorado, Empulse is a community of drivers interested in using their cars to the fullest extent. 
                                You can find Empulse at racetracks around Colorado including but not limited to: <span style={{fontWeight: 'bold'}}>High Plains Raceway, Pikes Peak International Raceway, and IMI motorsports complex.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bar" style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '1500px'}}></div>
                </div>
                <div style={styles.frsContainer}>
                    <div style={styles.frsText}>
                    <p>JOIN NOW.</p>
                    <a href="https://discord.gg/j6EMR5r" target="_blank" rel="noopener noreferrer" style={styles.garageButton}>HERE</a>
                    </div>
                    <img style={styles.frsimg} src={fullsize}></img>
                </div>
                <div className="bar" style={{marginTop: 40, backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%', maxWidth: '1500px', margin: '30px auto 30px auto'}}></div>
                <div style={styles.content2}>
                    <div style={styles.row}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <img alt="cars drifting" src={drift} style={{width: '400px', marginRight: '20px', paddingLeft: 20, borderLeft: '2px solid white'}}></img>
                            <div>
                                <h2 style={{color: 'white', fontWeight: 'bold'}}>What we do.</h2>
                                <p style={styles.contentText}>Community is of the highest importance within Empulse. 
                                When we arent there in person, we are online connecting with our members through youtube and simulations like Assetto Corsa. Interested in being a part of our Assetto Corsa community? Click the Assetto corsa tab above!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar" style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%', maxWidth: '1500px', margin: '20px auto 20px auto'}}></div>
            </div>
        )
    }
}

const styles = {
    container: {
        zIndex: 2,
        position: 'relative',
        minWidth: '1000px',
    },
    maintext: {
        textAlign: 'center',
        position: 'absolute', 
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    img: {
        opacity: '1',
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
        boxShadow: '0px 0px 80px black',
    },
    logo: {
        width: '600px',
        height: '200px',
        objectFit: 'cover',
    },
    button: {
        backgroundColor: 'rgb(150,0,0)',
        color: 'white',
        borderRadius: '20px',
        border: 'none',
        fontWeight: 'bold',
        borderBottom: '3px solid rgb(100,0,0)',
        borderTop: '3px solid rgb(200,0,0)',
        padding: '8px',
        fontSize: '15px',
    },
    popup: {
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
    },
    content1: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1500px',
        minWidth: '1000px',
        height: '500px',
    },
    row: {
        padding: '0px 100px 0px 100px',
        height: 'fit-content',
        margin: 10,
        width: '100%',
    },
    contentText: {
        color: 'white',
        fontSize: 17,
        maxWidth: '800px',
    },
    blob: {
        zIndex: 3,
        position: 'absolute',
        top: 100,
        height: 1000,
        width: 1000,
        backgroundColor: 'white',
        transform: 'skew(80deg)'
    },
    content2: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1500px',
        minWidth: '1000px',
        height: '350px',
    },
    frsimg: {
        width: '100%',
        maxHeight: '600px',
        marginBottom: '10px',
        opacity: 1,
        objectFit: 'cover',
        boxShadow: '0px 0px 80px black',
    },
    frsContainer: {
        position: 'relative'
    },
    frsText: {
        textAlign: 'center',
        position: 'absolute', 
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: 90,
        width: '100%',
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    garageButton: {
        position: 'absolute',
        transform: 'translate(-50%)',
        padding: 10,
        textDecoration: 'none',
        color: 'rgb(89,89,89)',
        top: 200,
        width: 80,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 20,
    },
    icon: {
        fontSize: 128,
        margin: 45,
        color: '#7289da'
    }
}