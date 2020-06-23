import React from 'react';
import './styles.css';

import Footer from '../Footer'
import Navbar from '../NavBar'
import listenMusic from '../../assets/listenToMusic.png'

export default function Home() {
    return (
        <section id="page-container">
            <Navbar />
            <div id="content-wrap">
                <div className="home-main-div">
                    <div className="home-header-1">
                          <h1>Seja Premium. <br/>Seja Feliz.</h1>
                    </div>
                    <div className="home-header">
                    <h1>A qualidade de som do Premium é incrível. <br/>Curta música sem propaganda em qualquer dispositivo.</h1>
                        <div className="imgListenMusic"><img src={listenMusic} alt="penes"></img></div>
                        
                    </div>
        
                </div>
            </div>
            <Footer/>
        </section>
    )
}