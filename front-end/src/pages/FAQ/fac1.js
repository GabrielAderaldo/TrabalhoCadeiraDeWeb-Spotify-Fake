import React from 'react';
import ReactDom,{Link} from 'react-dom';
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

class Link1 extends React.Component{
    
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





export default function fac1(){
    
    
    return(
        <div className="faq2Container">
            <Navbar/>
            <div className="espaco"></div>
            <Link1 titulo="Ajuda com a conta" 
            qNome1="Não consigo fazer login"
            qNome2="Spotify e Facebook"
            qNome3="Redefinir sua senha" 
            qNome4="Configurações de país" 
            qNome5="Nome de usuário e nome de exibição" 
            qNome6="Foto de perfil"/>
            <div className="espaco"></div>
            <Footer/>
        </div>
    )
}