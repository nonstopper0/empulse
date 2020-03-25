import React from 'react';
import img from './varis.jpg'
import logo from './empulse.png'
import drift from './drift.png'
import gridlife from './gridlife.jpg'
import { FaAngleDoubleRight, FaFlagCheckered} from 'react-icons/fa'
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
            <div>
                <div style={styles.container}>
                    <img src={img} id="img" style={styles.img}></img>
                    <div style={styles.maintext}>
                        <img className="logohover" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} style={styles.logo} src={logo}></img>
                        { !this.state.hover ? <p className="popin" style={styles.popup}>Driver focused, People oriented...</p> : null}
                    </div>
                    <div onClick={()=>scroll.scrollTo(document.getElementById('img').clientHeight)} style={{position: 'absolute', top: '94%', left: '50%', color: 'white', transform: 'translate(-50%)'}}><MdExpandMore style={{fontSize: 40}}/></div>
                </div>
                <div style={styles.content1}>
                <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%'}}><FaAngleDoubleRight flip style={{position: 'relative', left: '50%', color: 'rgb(48,48,48)', top: -8, transform: 'translate(-50%)'}}></FaAngleDoubleRight></div>
                    <div style={styles.row}>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <img src={gridlife} style={{width: '400px', marginRight: '20px'}} alt="drift"></img>
                            <div>
                                <h2 style={{color: 'white', fontWeight: 'bold'}}>A team focused on Motorsport.<FaFlagCheckered style={{position: 'relative', top: 2, left: 10, fontSize: 20, color: 'grey'}}></FaFlagCheckered></h2>
                                <p style={styles.contentText}>Based in Colorado, Empulse is a community of drivers interested in using their cars to the fullest extent. 
                                You can find Empulse at racetracks around Colorado including but not limited to: <span style={{fontWeight: 'bold'}}>High Plains Raceway, Pikes Peak International Raceway, and IMI motorsports complex.</span></p>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%'}}><FaAngleDoubleRight style={{position: 'relative', left: '50%', color: 'rgb(48,48,48)', top: -8, transform: 'translate(-50%)'}}></FaAngleDoubleRight></div>
                    <div style={styles.row}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <div>
                                <h2 style={{color: 'white', fontWeight: 'bold'}}>What we do.</h2>
                                <p style={styles.contentText}>Community is of the highest importance within Empulse. 
                                When we arent there in person, we are online connecting with our members through youtube and simulations like Assetto Corsa. Interested in being a part of our Assetto Corsa community? Click the Assetto corsa tab above!</p>
                            </div>
                            <img src={drift} style={{width: '400px', marginLeft: '20px'}} alt="drift"></img>
                        </div>
                    </div>
                    <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%'}}><FaAngleDoubleRight flip style={{position: 'relative', left: '50%', color: 'rgb(48,48,48)', top: -8, transform: 'translate(-50%)'}}></FaAngleDoubleRight></div>
                    <button onClick={() => this.props.history.push('/team')} style={styles.garageButton}>View Garage</button>
                </div>
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
        height: '800px',
        backgroundColor: 'rgb(18,18,18)',
    },
    row: {
        padding: '0px 100px 0px 100px',
        height: 'fit-content',
        margin: 10,
        width: '100%',
    },
    contentText: {
        color: 'white',
        fontSize: 17
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
    garageButton: {
        position: 'relative',
        left: '50%',
        top: 10,
        transform: 'translate(-50%)',
        width: '140px',
        height: '45px',
        borderRadius: 100,
        backgroundColor: 'rgb(130,0,0)',
        color: 'white',
        border: '2px solid rgb(90,0,0)',
        fontSize: 20,
    }
}