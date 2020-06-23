import React,{Component} from 'react';
import '../Login/estilo.css';
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";

import Nav from "../NavBar";
import Footer from '../Footer';
import Axios from 'axios';
import { get } from 'http';







class Teste extends Component{
    render(){
        return(
            <div><Nav></Nav></div>
        )
    }
}



export default class Login extends Component {

    constructor(){
            super()
            this.state ={
                message : '',

            }
    }

    usuarioDefaut={
        email: 'gaderaldo10@gmail.com',
        senha: 'tomate98'
    }

    
    singIn = (event) =>{
        const data = {email: this.email,senha: this.senha}  
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                email: this.email,
                senha: this.senha
            }),
            headers: new Headers({
                'Content-Type':'application/json'
            })
            
        };

        const usuarioLogin ={
            email: this.email,
            senha: this.senha
        }
        var fakeToken = null;

        console.log("é isso que procuro" + usuarioLogin)
        Axios.post("http://localhost:8080/user/autenticacao",usuarioLogin).then(res =>{
            fakeToken  = true;
            localStorage.setItem('token',fakeToken);
                 
         })
        .catch(err =>{
            localStorage.removeItem('token',fakeToken);
            

        });
    
    }


    singOut = (event) =>{
        localStorage.removeItem('token',false);
    }



    render(){
        return(
            <div className="containerPrincipal">
               <Teste></Teste>
               <div className="espaco"></div>
               <div className="loginContainer">
                <div className="chamadaLogin">Seja bem vindo!</div>
                    <div className="flex">
                        <div className="formsLogin">
                        {
                            this.state.message !== ''?(
                            <alert>{this.state.message}</alert>
                            ):''
                        } 
                                <div className="conteudoForms1">
                                <label for="email" className="lbLogin">Login: </label>
                                <input type="text" id="email" placeholder="Digite seu email" className="txtLogin" onChange={e => this.email = e.target.value}></input>
                            </div>
                                <div className="conteudoForms2">
                                <label for="senha" className="lbSenha">Senha: </label>
                                <input type="password" id="email" placeholder="Digite sua senha" className="txtSenha" onChange={e => this.senha = e.target.value}></input>
                            </div>
                        
                            <button className="bntLogin" block onClick={this.singIn}>Entrar</button>
                            <button className="bntOff" block onClick={this.singOut}>Sair</button>
                            <h3 className="registrar">Não tem uma conta? <Link className="link" to="/register">clique aqui</Link></h3>
                        {/**Final do forms Login */}
                        </div>
                    </div>              
               </div>
               <div className="espacoF">.</div>
               <Footer></Footer>
            </div>
        );
    }
}