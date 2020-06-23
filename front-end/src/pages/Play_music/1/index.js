import React, {Component} from 'react';
import './styles.css';

import Footer from '../../Footer'
import Navbar from '../../NavBar'

import { playmusic,rangeSlider,off} from './app'

//import db from '../../../db.json'

import logo from '../1/assets/playlistImg.jpg'
import logoCentro from '../../../assets/footerLogo.png'

import musica2 from './assets/songs/Imagine_Dragons_-_Natural.mp3'
import musica3 from './assets/songs/Post_Malone_-_Saint_Tropez.mp3'
import musica4 from './assets/songs/senzawa-i_wanna_be_a_cowboy.mp3'

import { FaPlay,FaPause } from "react-icons/fa";
import axios from "axios"

/*const testJson = db.playlist[0];
const dbJson = [];
testJson.musicId.forEach(element => {
    dbJson.push(db.songs[element])
});
const musica1 = require('../../../Mock/Music/Asserts/pop1.mp3')*/

/*const api = axios.create({
    baseURL:'http://localhost:4000/playlist/1'
})*/

 class Play_music_1 extends Component {

    state = {
        playlist: [],
        songs: [],
      }

      componentDidMount(){
        const songs = [];
        axios.get(`http://localhost:8080/playlist/pop`)
      .then(res => {
        const playlist = res.data;
        this.setState({ playlist });
        playlist.musicId.forEach(element => {
            axios.get('http://localhost:8080/song/buscar/'+(element+1))
            .then(res=>{
                songs.push(res.data)
                this.setState({songs});
            })
        });
      })
        
    }

     render(){
         const {playlist} = this.state;
         const {songs} = this.state
        if(songs[3]){
            return (
                <section id="playmusic-page-container">
                    <Navbar />
                    <div id="content-wrap">
                        
                        <img className="img-centro" src={logoCentro} alt="logo"></img>
        
                        <div className="play-music-container" onLoad={off}>
                            <div className="info">
                                    <span id="rangeValue">Volume</span>
                                    <input  id="rangerBar" className="rangeBar" type="range" 
                                    min="0" max="10" onChange={rangeSlider}></input>
                                <img src={logo} alt="img"></img>
                             <h1>{playlist.name.toUpperCase()}</h1>
                            </div>
                            {console.log(songs[1].artist)}
                            <div className="playlist-songs">
                                <ul>
                                    <li className="musica" onClick={playmusic.bind(this, "audio1")}>
                                        <audio id="audio1">
                                            <source src={musica2} type="audio/mp3"></source>
                                        </audio><FaPause classsName="pauseicon" id="audio1idpause"/><FaPlay className="playicon" id="audio1idplay"/><a>{songs[0].artist} - {songs[0].name}</a></li>
        
                                    <li className="musica" onClick={playmusic.bind(this, "audio2")}>
                                        <audio id="audio2">
                                            <source src={musica2} type="audio/mp3"></source>
                                        </audio><FaPause className="pauseicon" id="audio2idpause"/><FaPlay className="playicon" id="audio2idplay"/><a>{songs[1].artist} - {songs[1].name}</a></li>
        
                                    <li className="musica" onClick={playmusic.bind(this, "audio3")}>
                                        <audio id="audio3">
                                            <source src={musica3} type="audio/mp3"></source>
                                        </audio><FaPause className="pauseicon" id="audio3idpause"/><FaPlay className="playicon" id="audio3idplay"/><a>{songs[2].artist} - {songs[2].name}</a></li>
        
                                    <li className="musica" onClick={playmusic.bind(this, "audio4")}>
                                        <audio id="audio4">
                                            <source src={musica4} type="audio/mp3"></source>
                                        </audio><FaPause className="pauseicon" id="audio4idpause"/><FaPlay className="playicon" id="audio4idplay"/><a>{songs[3].artist} - {songs[3].name}</a></li>
        
        
                                </ul>
                            </div>
        
                        </div>
                    </div>
                    <Footer />
                </section>
            )
        }else{
            return <div>Carregando dados...</div>
        }
    }
}
export default Play_music_1;