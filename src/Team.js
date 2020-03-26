import React from 'react';
import GarageDoor from './garage/garagedoor2.png'
import Garage from './garage/garagedoor.png'
import { Slide } from 'react-slideshow-image';

export default class Team extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={styles.garageContainer}>
                    <img alt="garage" id="garage" style={styles.garage} src={Garage}></img>
                    <div style={styles.doorContainer} >
                        <img alt="garagedoor" id="garageDoor" style={styles.garageDoor} src={GarageDoor}></img>
                        <div className="slide-container">
                            <Slide {...slideProperties}>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': ``}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': 'url("")'}}>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const slideProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
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
        top: 260,
        overflow: 'hidden',
        height: '645px',
        width: '860px',
        left: 65,
    },
    garage: {
        zIndex: 1,
        position: 'absolute'
    },
    garageDoor: {
        left: -64,
        opacity: 0,
        top: -260,
        zIndex: 1,
        position: 'absolute'
    }
}