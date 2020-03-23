import React from 'react';
import './App.css'
import img from './varis.jpg'
import logo from './empulse.png'

export default class Team extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <img src={img} style={styles.img}></img>
                <div style={styles.maintext}>
                    <p>Welcome to Empulse Racing</p>
                    <button style={styles.button}>Learn More...</button>
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
        fontSize: 16,
        fontWeight: '700',
        color: 'white', 
    },
    img: {
        backgroundColor: 'black',
        opacity: '.9',
        width: '100%'
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