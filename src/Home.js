import React from 'react';
import img from './varis.jpg'
import logo from './empulse.png'

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
            <div style={styles.container}>
                <img src={img} style={styles.img}></img>
                <div style={styles.maintext}>
                    <img className="logohover" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse} style={styles.logo} src={logo}></img>
                    { this.state.hover ? <p style={styles.popup}>Driving Reimagined</p> : null}
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
        backgroundColor: 'black',
        opacity: '.9',
        width: '100%',
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
    }
}