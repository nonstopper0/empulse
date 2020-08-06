import React from 'react';
import Minami from './Minami.jpg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { MdFileDownload } from 'react-icons/md'
import SlideBoizz from './slideboizz.png'

export default class Team extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <header style={{textAlign: 'center', color: 'white'}}>
                    <h1>DOWNLOAD</h1>
                    <p>To play on our custom server you need to have custom files! See the links below for both the track and vehicle files</p>
                </header>
                <div className="bar" style={styles.breaker}></div>
                <div className="download" style={styles.row}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: 20, alignItems: 'center'}}>
                        <img alt="playground" style={styles.playground} src={Minami}></img>
                        <a className="downloadButton" style={styles.button} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1kHRmJ5i9WzZGs0IKKQeVfv1ByusUjVj7/view">Ebisu Minami<MdFileDownload style={{fontSize: 30, position: 'relative', top: 5, left: 5, color: 'grey'}}></MdFileDownload></a>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: 20, alignItems: 'center'}}>
                    <img alt="slide boizz car pack" style={styles.playground} src={SlideBoizz}></img>
                    <a className="downloadButton" style={styles.button} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/uc?id=1GuBsGuz-pkpSqNrxhGqXfrW67-Ok_VZi&export=download">Slide boizzz<MdFileDownload style={{fontSize: 30, position: 'relative', top: 5, left: 5, color: 'grey'}}></MdFileDownload></a>
                    </div>
                </div>
                <div className="bar" style={styles.breaker}></div>
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
        width: '75%', 
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
