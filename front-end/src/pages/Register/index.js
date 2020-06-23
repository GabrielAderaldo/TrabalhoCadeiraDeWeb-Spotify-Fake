import React,{ Component } from 'react';
import './styles.css';

import Footer from '../Footer'
import Navbar from '../NavBar'
import logo from '../../assets/logoCadastro.png'

import axios from 'axios'

class Cadastro extends Component {

    constructor(){
      super();
  
      this.state = {
        email: "",
        emailConfirm: "",
        senha: "",
        userName: "",
        day: "",
        month: "",
        year: "",
        genero: "",
        nascDia:""
      };
  
    }
  
    handleChange = (input) => (event) => {
      this.setState({
        [input]: event.target.value
      })
    }
  
    handleSubmit = (event) => {
      this.state.nascDia= this.state.day+"/"+this.state.month+"/"+this.state.year
      console.log(this.state)
      if (this.state.email === this.state.emailConfirm) {
        alert("Seu cadastro foi realizado com sucesso.");
        axios.post("http://localhost:8080/user/criarConta", this.state)
        .then(res =>{
          console.log(res)
        }).catch(err =>{
          console.log(err)
        })
      }else{
        alert("Erro! Reconfirme seu E-mail.");
        event.preventDefault();
      }
    }
  
    render() {
      return (
          <section id="page-container">
          <Navbar />
          <div id="content-wrap">
        <div className="espacamento"> </div>
        <form onSubmit={this.handleSubmit} className="form-reg">
          <div>
            <img src={logo} alt="spotify logo"></img>
          </div>
          <div className="form-header">
            <h3>Inscrever-se com seu e-mail</h3>
          </div>
          <div className="form-req-info">
            <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="E-mail" />
  
            <input type="text" value={this.state.emailConfirm} onChange={this.handleChange("emailConfirm")} placeholder="Confirmar E-mail" />
  
            <input type="text" value={this.state.senha} onChange={this.handleChange("senha")} placeholder="Senha"  />
  
            <input type="text" value={this.state.userName} onChange={this.handleChange("userName")} placeholder="Como devemos chamar você?" />
          </div>
          <div className="form-opt-info">
            <label>
              Data de nascimento
            </label>
            <br/>
            <input type="text" value={this.state.day} onChange={this.handleChange("day")} placeholder="Dia" />
  
            <select id="months" value={this.state.month} onChange={this.handleChange("month")}>
              <option value="" disabled hidden>Mês</option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
  
            <input type="text" value={this.state.year} onChange={this.handleChange("year")} placeholder="Ano" />
  
            <br/>
            
            <input type="radio" id="male" name="genero" value="masculino" onChange={this.handleChange("genero")}/>
            <label htmlFor="male">Masculino</label>
  
            <input type="radio" id="female" name="genero" value="feminino" onChange={this.handleChange("genero")}/>
            <label htmlFor="female">Feminino</label>
  
            <input type="radio" id="other" name="genero" value="nao-binario" onChange={this.handleChange("genero")}/>
            <label htmlFor="other">Não binário</label>
          </div>
          
          <input type="submit" className="form-button" value="Inscrever-se" />
          
        </form>
        <div className="espacamento-2"> </div>
        </div>
        <Footer/>
        </section>
        
      );
    }
  }
  
  export default Cadastro