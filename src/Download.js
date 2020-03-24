import React from 'react';
import Playground from './playground.jpg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import GetAppIcon from '@material-ui/icons/GetApp';
import TandoBuddies from './tandobuddies.png'

export default class Team extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <header style={{textAlign: 'center', color: 'white'}}>
                    <h1>DOWNLOAD</h1>
                    <p>To play on our custom server you need to have custom files! See the links below for both the track and vehicle files</p>
                </header>
                <div style={styles.breaker}><DoubleArrowIcon style={{position: 'relative', left: '49%', color: 'rgb(48,48,48)', top: -10}}></DoubleArrowIcon></div>
                <div style={styles.row}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: 20, alignItems: 'center'}}>
                        <img style={styles.playground} src={Playground}></img>
                        <a style={styles.button} target="_blank" href="https://drive.google.com/uc?id=0B7A5dRnNXcFUNGJhWHNzaEp6dXM&export=download">Drift Playground<GetAppIcon style={{fontSize: 30, position: 'relative', top: 5, left: 5, color: 'grey'}}></GetAppIcon></a>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: 20, alignItems: 'center'}}>
                    <img style={styles.playground} src={TandoBuddies}></img>
                    <a style={styles.button} target="_blank" href="https://drive.google.com/uc?id=0B7A5dRnNXcFUNGJhWHNzaEp6dXM&export=download">Tando Buddies<GetAppIcon style={{fontSize: 30, position: 'relative', top: 5, left: 5, color: 'grey'}}></GetAppIcon></a>
                    </div>
                </div>
                <div style={styles.breaker}><DoubleArrowIcon style={{position: 'relative', left: '49%', color: 'rgb(48,48,48)', top: -10}}></DoubleArrowIcon></div>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        minWidth: '1000px',
        maxWidth: '1500px',
        margin: '0 auto',
        height: '800px',
    }, 
    row: {
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        color: 'white',
    },
    playground: {
        height: '300px',
        width: '400px',
        objectFit:'contain',
        borderRadius: 10
    },
    breaker: {
        backgroundColor: 'rgb(48,48,48)', 
        height: '1px', 
        width: '100%', 
        margin: '30px 0px 30px 0px'
    },
    button: {
        color: 'white', 
        fontSize: 30, 
        textDecoration: 'none',
        backgroundColor: 'rgb(49,49,49)',
        borderRadius: 10,
        padding: 5,
        width: '295px',
        fontWeight: 'bold',
    }
}