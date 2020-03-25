import React from 'react';
import drift1 from './gallery/1.jpg'
import drift3 from './gallery/3.jpg'
import drift4 from './gallery/4.jpg'
import drift5 from './gallery/5.jpg'
import drift6 from './gallery/6.jpg'
import drift7 from './gallery/7.jpg'

export default class Team extends React.Component {
    render() {
        return (
            <React.Fragment>
                <slider id="gallery" style={styles.galleryContainer}>
                        <img style={styles.img} src={drift1}/>
                        <img style={styles.img} src={drift6}/>
                        <img style={styles.img} src={drift3}/>
                        <img style={styles.img} src={drift4}/>
                        <img style={styles.img} src={drift5}/>
                        <img style={styles.img} src={drift7}/>
                </slider>
            </React.Fragment>
        )
    }
}

const styles = {
    galleryContainer: {
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        minWidth: '1000px',
        marginTop: 60,
        margin: 0,
        animation: '20s slider infinite'
    }
}