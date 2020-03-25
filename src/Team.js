import React from 'react';
import GarageDoor from './garage/garagedoor2.png'
import Garage from './garage/garagedoor.png'

export default class Team extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={styles.garageContainer}>
                    <img id="garage" style={styles.garage} src={Garage}></img>
                    <div style={styles.doorContainer} >
                        <img id="garageDoor" style={styles.garageDoor} src={GarageDoor}></img>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const styles = {
    garageContainer: {
        height: '1000px',
        width: '1000px',
        margin: '0 auto',
        overflow: 'hidden'
    },
    doorContainer: {
        position: 'relative',
        top: 200,
        overflow: 'hidden',
        height: '700px',
        width: '870px',
        left: 55,
    },
    garage: {
        zIndex: 1,
        position: 'absolute'
    },
    garageDoor: {
        left: -55,
        opacity: 0,
        top: -200,
        zIndex: 0,
        position: 'absolute'
    }
}