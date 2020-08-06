import React from 'react';
import { Slide } from 'react-slideshow-image'

export default class Team extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <div style={{minWidth: '1000px', maxWidth: '1500px', marginTop: 70}} className="slide-container">
                    <Slide {...slideProperties}>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/slide2.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/slide1.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/8.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/slide3.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/slide4.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/5.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/4.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/6.jpg")'}}></div>
                        </div>
                        <div className="each-slide">
                            <div style={{backgroundImage: 'url("./gallery/7.jpg")'}}></div>
                        </div>
                    </Slide>
                </div>
            </React.Fragment>
        )
    }
}

const slideProperties = {
    duration: 4000,
    transitionDuration: 900,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
}
