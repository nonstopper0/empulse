import React from 'react';
import './App.css'
import img from './fullsize.jpg'

export default class Team extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <p style={styles.maintext}>Welcome to Empulse Racing</p>
                <img src={img} style={styles.img}></img>
            </div>
        )
    }
}

const styles = {
    maintext: {
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        fontSize: 20,
        color: 'white', 
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgb(0,0,0,.5)',
        borderRadius: '5px',
        padding: '8px'
    },
    img: {
        width: '100%'
    }
}