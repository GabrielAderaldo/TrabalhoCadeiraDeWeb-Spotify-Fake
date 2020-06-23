import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

import Footer from '../Footer'
import Navbar from '../NavBar'



class ParteUm extends React.Component{
    render(){
        return(
            <div className="oneContainer">
                {/**Inicio do mainContainer*/}
                <div className="colunaOneContainer">
                    {/*Inicio container das colunas*/}
                    <div className="cTitulo"><h1>Conta e pagamento</h1></div>
                    <Link to="faq1"><div className="cPergunta">Ajuda com a conta</div></Link>
                    <Link to="faq2"><div className="cPergunta">Ajuda com pagamentos</div></Link>
                    <Link to="faq3"><div className="cPergunta">Opções de assinatura</div></Link>

                    {/*Final container das colunas*/}
                </div>
                <div className="colunaOneContainer">
                    {/*Inicio container das colunas*/}
                    <div className="cTitulo"><h1>Usando o Spotify</h1></div>
                    <Link to="faq4"><div className="cPergunta">Tutoriais em Vídeo</div></Link>
                    <Link to="faq5"><div className="cPergunta">Primeiros passos</div></Link>
                    <Link to="faq6"><div className="cPergunta">Playlists</div></Link>
                    
                    {/*Final container das colunas*/}
                </div>
                <div className="colunaOneContainer">
                    {/*Inicio container das colunas*/}
                    <div className="cTitulo"><h1>Conta e pagamento</h1></div>
                    <Link to="faq7"><div className="cPergunta">Alto-falantes</div></Link>
                    <Link to="faq8"><div className="cPergunta">TVs</div></Link>
                    <Link to="faq9"><div className="cPergunta">Carros</div></Link>
                    {/*Final container das colunas*/}
                </div>
                {/**Fim do MainContainer*/}
            </div>
        )
    }
}


class ParteDois extends React.Component{
    render(){
        return(
            <div className="parteDoisContainer">
                <div className="ChamadaPrincipal">Visite a Comunidade</div>
                <div className="mainTexto">Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</div>
                <div className="bntDiv"><a href="https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers" className="bntForum">Encontre Respostas!</a></div>
            </div>
        )
    }
}






export default function Faq() {
    return (
        <section>
           
            <div className="maiorContainer">   
            <Navbar />
            <div className="espaco"></div>
            <ParteUm/>
            <div className="espaco"></div>
            <ParteDois/>
            <Footer/>
            </div>
        
        </section>
    )
}