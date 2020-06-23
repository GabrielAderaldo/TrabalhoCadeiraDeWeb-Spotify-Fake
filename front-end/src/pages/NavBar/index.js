import React from 'react';
import './styles.css';
import logoImg from '../../assets/navlogo2.png';
import {func} from './app.js'
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <>
        <nav className="nav-main" id="nav" >  
            <div className="logo">
            <img src={logoImg} alt="Logo" class="logoNav"/>
                <h4>Spotify</h4>
            </div>

            <ul className="nav-link" >
                <li>
                <Link className="back-link" to='/'><a>Home</a></Link>
                    
                </li>

                <li>
                <Link className="back-link" to='/faq'><a>FAQ</a></Link>
                </li>

                <li>
                <Link className="back-link" to='/playlist'><a>Playlist</a></Link>
                </li>

                <li>
                <Link className="back-link" to='/register'><a>Register</a></Link>
                </li>

                <li>
                <Link className="back-link" to='/login'><a>Login</a></Link>
                </li>


            </ul>

            <div className="burguer" onClick={func}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </>
    )
    
};
