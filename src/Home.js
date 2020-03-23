import React from 'react';
import Roller from './Roller.jpg'

export default class Team extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <img src={Roller} style={styles.img}></img>
                <div style={styles.maintext}>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        position: 'relative'
    },
    maintext: {
        textAlign: 'left',
        position: 'absolute', 
        top: '70%', 
        left: '60%',
    },
    img: {
        backgroundColor: 'black',
        opacity: '1',
        width: '100%',
        overflow: 'hidden',
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