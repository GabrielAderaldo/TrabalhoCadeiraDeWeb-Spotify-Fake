import React,{Component} from 'react';
import './styles.css';

import Footer from '../../Footer'
import Navbar from '../../NavBar'

import { playmusic,rangeSlider,off} from './app'

import logo from '../8/assets/playlistImg.jpg'
import logoCentro from '../../../assets/footerLogo.png'

import musica1 from './assets/songs/musica1.mp3'
import musica2 from './assets/songs/musica2.mp3'
import musica3 from './assets/songs/musica3.mp3'
import musica4 from './assets/songs/musica4.mp3'

import { FaPlay,FaPause } from "react-icons/fa";

import axios from "axios"

class Play_music_8 extends Component {

    state={
        playlist: [],
        songs: [{ 'id': '', 'name': '', 'artist': '', 'path': ''}]
    }

    componentDidMount(){
        const songs = [];
        axios.get(`http://localhost:8080/playlist/poppunk`)
      .then(res => {
        const playlist = res.data;
        this.setState({ playlist });
        playlist.musicId.forEach(element => {
            axios.get('http://localhost:8080/song/buscar/'+(element))
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
                <section id="playmusic-8-page-container">
                    <Navbar />
                    <div id="content-wrap">
                        <img className="img-centro" src={logoCentro} alt="logo"></img>
        
        
                        <div className="play-music-container" onLoad={off}>
                            <div className="info">
                                    <span id="rangeValue">Volume</span>
                                    <input  id="rangerBar" className="rangeBar" type="range" 
                                    min="0" max="10" onChange={rangeSlider}></input>
                                <img src={logo} alt="img" className="img"></img>
                                <h1>{playlist.name.toUpperCase()}</h1>
                            </div>
        
                            <div className="playlist-songs">
                                <ul>
                                    <li className="musica" onClick={playmusic.bind(this, "audio1")}>
                                        <audio id="audio1">
                                            <source src={musica1} type="audio/mp3"></source>
                                        </audio><FaPause className="pauseicon" id="audio1idpause"/><FaPlay className="playicon" id="audio1idplay"/><a>{songs[0].artist} - {songs[0].name}</a></li>
        
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
            return <div>Carregando...</div>
        }
    }
}
export default Play_music_8;