import React from 'react';
import img from './varis.jpg'
import logo from './empulse.png'
import drift from './drift.png'
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
                <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '1500px'}}></div>
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
                    <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '1500px'}}></div>
                </div>
                <div style={styles.frsContainer}>
                    <p style={styles.frsText}><span style={{color: 'red'}}></span>RACE. DRIFT. SHOW.</p>
                    <img style={styles.frsimg} src={fullsize}></img>
                </div>
                <div style={{marginTop: 40, backgroundColor: 'rgb(48,48,48)', height: '1px', width: '1500px', margin: '30px auto 30px auto'}}></div>
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
                <div style={{marginTop: 30, backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%', width: '1500px', margin: '20px auto 20px auto'}}></div>
                <button onClick={()=> {this.props.history.push('/team')}} style={styles.garageButton}>View Garage</button>
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
        maxHeight: '500px',
        marginBottom: '10px',
        opacity: 1,
        objectFit: 'cover',
    },
    frsContainer: {
        position: 'relative'
    },
    frsText: {
        textAlign: 'center',
        position: 'absolute', 
        top: '35%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: 90,
        width: '100%',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        mixBlendMode: 'overlay',
        letterSpacing: '12px',
    },
    garageButton: {
        position: 'relative',
        left: '50%',
        top: 50,
        transform: 'translate(-50%)',
        width: '140px',
        height: '45px',
        borderRadius: 100,
        backgroundColor: 'rgb(130,0,0)',
        color: 'white',
        border: '2px solid rgb(90,0,0)',
        fontSize: 20,
    },
    icon: {
        fontSize: 128,
        margin: 25,
        border: '1px solid grey',
        padding: 20,
        borderRadius: 20,
        color: '#7289da'
    }
}