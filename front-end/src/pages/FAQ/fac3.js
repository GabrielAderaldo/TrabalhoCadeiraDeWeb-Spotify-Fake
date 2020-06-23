import React from 'react';
import ReactDom from 'react-dom';
import './EstiloFaq2.css';


import Footer from '../Footer';
import Navbar from '../NavBar';


class Toggle extends React.Component{
    state={
        on: false,

    }
    
    
    toggle = () =>{
        this.setState({
            on: !this.state.on
        });
    };


    render(){
        return(
            <div className="">
                    <div>
        { this.state.on && <div className="txtPrincipal">{this.props.texto}</div>}
        <button className="bntResposta" onClick={this.toggle}>{this.props.nomeCaso}</button>
                    </div>
            </div>
        )
    }
}

class Link3 extends React.Component{
    
    render(){
    
        return(
                
             
           <div className="toggleContainer">
           
        <h1 className="tTitulo">{this.props.titulo}</h1>
           <div className="tRespostaFirst"><Toggle texto="Resposta 1" nomeCaso={this.props.qNome1} /></div>

           <div className="tResposta"><Toggle texto="Resposta 2" nomeCaso={this.props.qNome2} /></div>

           <div className="tResposta"><Toggle texto="Resposta 3" nomeCaso={this.props.qNome3} /></div>

           <div className="tResposta"><Toggle texto="Resposta 4" nomeCaso={this.props.qNome4} /></div>

           <div className="tResposta"><Toggle texto="Resposta 5" nomeCaso={this.props.qNome5} /></div>

           <div className="tResposta"><Toggle texto="Resposta 6" nomeCaso={this.props.qNome6} /></div>
           <div className="espaco"></div>
           
           </div>
           

        )
    }
}


export default function fac3(){
    
    
    return(
        <div className="faq2Container">
            <Navbar/>
            <div className="espaco"></div>
            <Link3 titulo="Opções de assinatura" 
            qNome1="Quais tipos de assinatura vocês oferecem?"
            qNome2="Premium"
            qNome3="Premium Família" 
            qNome4="Premium Duo" 
            qNome5="Premium para Universitários" 
            qNome6="Ofertas e descontos do Spotify Premium"/>
            <div className="espaco"></div>
            <Footer/>
        </div>
    )
}