import logo from './logo.svg';
import React from 'react'
import './App.css';
import Cadastro from './components/Cadastro/Cadastro'
import Usuarios from './components/Usuarios/Usuarios'
import Styled from 'styled-components'
import Header from './components/Header/Header'




class App extends React.Component {
	state = {
		exibirCadastro: true
	}

	abrirPaginaUsuarios = () => {
		this.setState({
			exibirCadastro: false,
		})
	}
	abrirPaginaCadastro = () => {
		this.setState({
			exibirCadastro: true,
		})
	}
	render(){
		let cadastroExibido = ''
		let usuariosExibidos = ''
		if(this.state.exibirCadastro === true){
			cadastroExibido = <Cadastro abrirPaginaUsuarios={this.abrirPaginaUsuarios} />
		}else{
			usuariosExibidos = <Usuarios abrirPaginaCadastro={this.abrirPaginaCadastro} />
		}

		return (
		    <div className="App">
		    	<Header 
		    		abrirPaginaUsuarios={this.abrirPaginaUsuarios} 
		    		abrirPaginaCadastro={this.abrirPaginaCadastro} 
		    	/>
		      {cadastroExibido}
		      {usuariosExibidos}
		    </div>
  		);
	}
  
}

export default App;
