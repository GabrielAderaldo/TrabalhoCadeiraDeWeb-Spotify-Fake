import React from 'react';
import './styles.css';
import logoImg from '../../assets/footerLogo.png'
import 'font-awesome/css/font-awesome.min.css';

export default function Footer(){
    return(
        <div className="footer-main-div">
            <div className="inner-footer">

                <div className="logo-container">
                <img src={logoImg} alt="Logo" class="footer-logo-img"/>
                
                </div>
                

                <div className="footer-third">
                    <h1>EMPRESA</h1>
                    <a href = 'https://www.spotify.com/br/about-us/contact/'>Sobre</a>
                    <a href = 'https://www.spotifyjobs.com'>Empregos</a>
                    <a href = 'https://newsroom.spotify.com'>For the Record</a>
                </div>

                <div className="footer-third">
                    <h1>COMUNIDADES</h1>
                    <a href = 'https://artists.spotify.com'>Para Artistas</a>
                    <a href = 'https://developer.spotify.com'>Desenvolvedores</a>
                    <a href = 'https://spotifyforbrands.com'>Marcas</a>
                    <a href = 'https://investors.spotify.com'>Investidores</a>
                    <a href = 'https://spotifyforvendors.com'>Fornecedores</a>
                </div>

                <div className="footer-third">
                    <h1>LINKS ÚTEIS</h1>
                    <a href = 'https://support.spotify.com/br/'>Ajuda</a>
                    <a href = 'https://www.spotify.com/br/redirect/webplayerlink/'>Player da Web</a>
                    <a href = 'https://www.spotify.com/br/download/windows/'>Aplicativo móvel grátis</a>
                </div>

                <div className="footer-social">
                
                    <li><a href='https://www.facebook.com/SpotifyBrasil/?brand_redir=6243987495'><i className="fa fa-facebook"></i></a></li>
                    <li><a href='https://twitter.com/spotify'><i className="fa fa-twitter"></i></a></li>
                    <li><a href='https://www.instagram.com/spotify/'><i className="fa fa-instagram"></i></a></li>
                    <span>© 2020 Spotify AB</span>
                </div>
            </div>
        </div>
    )
}