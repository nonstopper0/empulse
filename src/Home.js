import React from 'react';
import img from './varis.jpg'
import logo from './empulse.png'
import drift from './drift.png'
import gridlife from './gridlife.jpg'

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
                <img src={img} style={styles.img}></img>
                <div style={styles.maintext}>
                    <img className="logohover" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} style={styles.logo} src={logo}></img>
                    { this.state.hover ? <p className="popin" style={styles.popup}>Driving Reimagined...</p> : null}
                </div>
            </div>
            <div style={styles.content1}>
                <div style={styles.row}>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <img src={gridlife} style={{width: '400px', marginRight: '20px'}} alt="drift"></img>
                        <div>
                            <h2 style={{color: 'white', fontWeight: 'bold'}}>A team focused on Motorsport</h2>
                            <p style={styles.contentText}>Based in Colorado, Empulse is a community of drivers interested in using their cars to the fullest extent. 
                            You can find Empulse at racetracks around Colorado including but not limited to: <span style={{fontWeight: 'bold'}}>High Plains Raceway, Pikes Peak International Raceway, and IMI motorsports complex</span></p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: 'rgb(48,48,48)', height: '1px', width: '100%'}}></div>
                <div style={styles.row}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <div>
                            <h2 style={{color: 'white', fontWeight: 'bold'}}>What we do</h2>
                            <p style={styles.contentText}>Community is of the highest importance within Empulse. 
                            When we arent there in person, we are online connecting with our members through youtube and simulations like Assetto Corsa. Interested in being a part of our Assetto Corsa community? Click the Assetto corsa tab above!</p>
                        </div>
                        <img src={drift} style={{width: '400px', marginLeft: '20px'}} alt="drift"></img>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const styles = {
    container: {
        position: 'relative',
        minWidth: '1000px'
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
        maxHeight: '1000px',
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
        height: '700px',
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
        fontSize: 15
    }
}