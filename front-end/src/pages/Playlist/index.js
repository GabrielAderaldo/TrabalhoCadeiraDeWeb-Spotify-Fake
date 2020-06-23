import React from 'react';
import './styles.css';
import Footer from '../Footer'
import Navbar from '../NavBar'
import pop from './imagem/pop.png';
import rock from './imagem/rock.jpg';
import indie from './imagem/indie.jpg';
import metal from './imagem/metal.jpg';
import old from './imagem/old.jpg';
import trap from './imagem/trap.jpg';
import trapBr from './imagem/trapbr.png';
import poppunk from './imagem/punkpop.png'
import {Link} from 'react-router-dom';
/*Criando os componentes para a aplicação*/


/*Criando um container teste*/
function CardV2pop(props) {
    return <div className="teamBx">
        <div className="membros">
            <div className="imgBx">
               <img className="img" src={pop} alt="Logo" />
            </div>
            <div className="detalhes">
                <div>
                    <h2>Playlist:Pop</h2>
                </div>
            </div>
        </div>
    </div>
}


function CardV2rock(props) {
    return <div className="teamBx">
        <div className="membros">


            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={rock} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>




            <div className="detalhes">
                <div>

                    <h2>Playlist:Trip Rock</h2>
                </div>
            </div>



        </div>

    </div>
}
function CardV2indie(props) {
    return <div className="teamBx">
        <div className="membros">
            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={indie} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>
            <div className="detalhes">
                <div>
                    <h2>Playlist:Indie</h2>
                </div>
            </div>
        </div>
    </div>
}

function CardV2trap(props) {
    return <div className="teamBx">
        <div className="membros">


            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={trap} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>




            <div className="detalhes">
                <div>

                    <h2>Playlist:Trap</h2>
                </div>
            </div>



        </div>

    </div>
}


function CardV2old(props) {
    return <div className="teamBx">
        <div className="membros">


            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={old} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>




            <div className="detalhes">
                <div>

                    <h2 className="ajustesGambiarra">Playlist:Boomer</h2>
                </div>
            </div>



        </div>

    </div>
}

function CardV2metal(props) {
    return <div className="teamBx">
        <div className="membros">


            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={metal} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>




            <div className="detalhes">
                <div>

                    <h2>Playlist:Metal</h2>
                </div>
            </div>



        </div>

    </div>
}

function CardV2trapBrasil(props) {
    return <div className="teamBx">
        <div className="membros">
            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={trapBr} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>
            <div className="detalhes">
                <div>
                    <h2>Playlist:Trap Nacional</h2>
                </div>
            </div>
        </div>
    </div>
}

function CardV2PopPunk(props) {
    return <div className="teamBx">
        <div className="membros">
            <div className="imgBx">
                {/*Aqui ficaria a tag de abertura da rota*/}<img className="img" src={poppunk} alt="Logo" />{/*Aqui ficaria a tag de fechamento da rota*/}
            </div>
            <div className="detalhes">
                <div>
                    <h2>Playlist:Pop Punk</h2>
                </div>
            </div>
        </div>
    </div>
}
/*Componente do card*/


/*Componente do texto*/
function Texto(props) {
    return <div className="containerTexto">

        <h1>É música que você quer?</h1>
        <h3>Conheça as melhores playlist do momento!</h3>
    </div>
}

/*declarando as contantes*/
const comment = {
    imagem: { nimg: { pop } }
}


function Playlist() {
    return (
        <section id="playlist-container">
            
            <div id="content-playlist-wrap">
                <Navbar />
                <div className="espaco"> </div>
                <div className="mainContainer">
                    <Texto></Texto>

                    <div className="margens">
                    <Link className="back-link" to='/playMusic/1'>     <CardV2pop /> </Link>
                    <Link className="back-link" to='/playMusic/2'>     <CardV2rock /> </Link>
                    <Link className="back-link" to='/playMusic/3'>     <CardV2trap /> </Link>
                    <Link className="back-link" to='/playMusic/4'>     <CardV2old /> </Link>
                    <Link className="back-link" to='/playMusic/5'>     <CardV2metal /> </Link>
                    <Link className="back-link" to='/playMusic/6'>     <CardV2indie /> </Link>
                    <Link className="back-link" to='/playMusic/7'>     <CardV2trapBrasil/> </Link>
                    <Link className="back-link" to='/playMusic/8'>     <CardV2PopPunk /> </Link>


                    </div>

                </div>
                <div className="espaco2"></div>
            </div>
            
            <Footer />
        </section>
    );
}

export default Playlist;
