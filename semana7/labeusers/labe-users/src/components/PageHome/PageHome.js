import React from 'react'
import Cadastro from '../Cadastro/Cadastro'
import Usuarios from '../Usuarios/Usuarios'
import OpenUsuarios from '../BotoesTrocaDePagina/OpenUsuarios'
import axios from 'axios'

class PageHome extends React.Component{
	state = {
		UsuarioCadastrado:'',
		EmailCadastrado:'',
		UsuariosCadastrados:[]
	}

	//função onchange para input controlado do nome
	recebeNome = (event) => {
		this.setState({UsuarioCadastrado: event.target.value})
	}

	//função onchange para input controlado do email
	recebeEmail = (event) => {
		this.setState({EmailCadastrado: event.target.value})
	}

	//função onclick para cadastrar usuario
	cadastrarUsuario = () =>{
		const body = {
			name: this.state.UsuarioCadastrado,
			email: this.state.EmailCadastrado
		}
		
		//Enviando dados para Api Labeuser
		axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
			headers: {
				Authorization: "cristiane-da-rocha-dumont"
			}
		}).then((resposta) => {
			alert("Usuário Cadastrado com Sucesso !")
			this.setState({
				UsuarioCadastrado:'',
				EmailCadastrado: ''
			})
		}).catch((error) => {
			alert("Houve algum erro ao cadastrar, volte mais tarde!")
			console.log("Este Erro aqui",error)
		})
	}

	//Exibir Usuarios Cadastrados
	puxarUsuariosCadastrados = () => {
		axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
			headers: {
				Authorization: "cristiane-da-rocha-dumont"
			}
		}).then((resposta) => {
			this.setState({UsuariosCadastrados: resposta.data})
			console.log(resposta.data)
		}).catch((error) => {
			console.log("Este Erro aqui",error)
		})
	}


	render(){
		return(
			<div>
				<Cadastro 
					cadastrarUsuario={this.cadastrarUsuario} 
					recebeNome={this.recebeNome} 
					recebeEmail={this.recebeEmail} 
					nomeDoUsuario={this.state.UsuarioCadastrado} 
					emailDoUsuario={this.state.EmailCadastrado}
				/>
				<OpenUsuarios 
					puxarUsuariosCadastrados={this.puxarUsuariosCadastrados}
				/>
				<Usuarios
					exibirUsuarios={this.state.UsuariosCadastrados}
				/>
			</div>
		)
	}
}
export default PageHome