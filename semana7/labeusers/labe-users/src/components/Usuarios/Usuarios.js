import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import UsuarioImg from '../../img/usuarios.jpg'
import DetalheUsuario from '../Usuarios/DetalheUsuario'
import Busca from '../Usuarios/Busca'
import {ButtonVoltar} from '../Usuarios/Estilos/StyleUsuario'
import {UsuariosCenter} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioH2} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioDeleteButton} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioTh2} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioSpan} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioTh1} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioTr} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioTbody} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioDiv} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioTabela} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioHead} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioHeadCol1} from '../Usuarios/Estilos/StyleUsuario'
import {UsuarioHeadCol2} from '../Usuarios/Estilos/StyleUsuario'


class Usuarios extends React.Component{
	state = {
		listaDeUsuarios:[],
		detalhesUsuario:'',
		showDetalhesUsuario:false,
		editarUsuario:false,
		buscarNome: '',
		listaDeBusca:'',
		exibirUsuarioEncontrado:false
	}

	componentDidMount = () => {
		this.exibeUsuarios()
	}

	// Headers e Url Api
	headers = {
			headers: {
				Authorization: "cristiane-da-rocha-dumont"
			}
	}
	urlApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

	//função que exibe usuarios
	exibeUsuarios = () => {
		axios.get(this.urlApi,this.headers).then((resposta) => {
			this.setState({
				listaDeUsuarios: resposta.data
			})
		}).catch((error) => {
			console.log("Este Erro aqui",error)
		})

	}

	//Funçao Deleta Usuário
	deletarUsuario = (iD) => {
		if(window.confirm("Tem certeza que deseja deletar esse usuário? ")){
			axios.delete(`${this.urlApi}/${iD}`,{headers: {
				Authorization: "cristiane-da-rocha-dumont",
				id:iD
			}}).then((resposta) => {
				alert("Usuario deletado com sucesso!")
			}).catch((error) => {
				console.log(error)
			})
		}
		this.setState({showDetalhesUsuario:false})
	}

	//Função que atualiza lista de usuario após alterações
	componentDidUpdate = () => {
		axios.get(this.urlApi,this.headers).then((resposta) => {
			this.setState({
				listaDeUsuarios: resposta.data
			})
		}).catch((error) => {
			console.log("Este Erro aqui",error)
		})
	}

	//Função que abre detalhe de cada usuário
	openDetalhes = (iD) => {
		axios.get(`${this.urlApi}/${iD}`,{
			headers: {
				Authorization: "cristiane-da-rocha-dumont",
				id:iD
			}
		}).then((resposta) => {
			this.setState({
				detalhesUsuario: {
					name: resposta.data.name,
					id: resposta.data.id,
					email: resposta.data.email
				}
			})
		}).catch((error) => {
			console.log(error)
		})
		this.setState({showDetalhesUsuario:true})
	}

	//Função que fecha o componente com detalhes do Usuario
	fecharDetalhes = () => {
		this.setState({showDetalhesUsuario:false,exibirUsuarioEncontrado:false})
	}

	//Função que abre edição do usuario
	editarUsuario = () => {
		this.setState({editarUsuario:true})
	}

	//Funções de input controlado para Nome e Email
	mudarEmail = (event) => {
		this.setState({detalhesUsuario:{
											email:event.target.value,
											name:this.state.detalhesUsuario.name,
											id:this.state.detalhesUsuario.id
										}})
	}
	mudarNome = (event) => {
		this.setState({detalhesUsuario:{
											email:this.state.detalhesUsuario.email,
											name:event.target.value,
											id:this.state.detalhesUsuario.id
										}})
	}

	//Função para salvar alterações do usuário
	salvarUsuario = () => {
		console.log("o id é: "+ this.state.detalhesUsuario.id + " o nome editado é " + this.state.detalhesUsuario.name + "o email é: " + this.state.detalhesUsuario.email  )

		if(window.confirm(`Deseja alterar para nome: ${this.state.detalhesUsuario.name} e email: ${this.state.detalhesUsuario.email} ?`)){
			let body = {
			name:this.state.detalhesUsuario.name,
			email:this.state.detalhesUsuario.email
			}
			axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.detalhesUsuario.id}`,body,{
				headers: {
					Authorization: "cristiane-da-rocha-dumont",
					id:this.state.detalhesUsuario.id
				}
			}).then((resposta) => {
				alert("Dados do usuário alterados com sucesso")
			}).catch((error) => {
				console.log("Este Erro aqui",error)
		})
		}
				this.setState({editarUsuario:false})
	}

	//Função Cancelar Edição
	cancelarEditar = () => {
		this.setState({editarUsuario:false})
	}

	/*Busca*/
	//Input controlado Busca
	inputControladoBusca = (event) => {
		this.setState({buscarNome: event.target.value})
	}
	//Função que realiza a busca
	buscaNome = () => {
		console.log(this.state.buscarNome)
		axios.get(`${this.urlApi}/search?name=${this.state.buscarNome}`,this.headers).then((resposta) => {
				console.log(resposta.data[0].name)
				this.atualizaLista(resposta.data[0].id)
			}).catch((error) => {
				alert("Verifique se você digitou nome completo corretamente")
				console.log("Este Erro aqui ->",error)

		})
	}

	//Função que abre o usuario pesquisado
	atualizaLista = (id) => {
		axios.get(`${this.urlApi}/${id}`,this.headers).then((resposta) => {
				console.log(resposta.data)
				this.setState({listaDeBusca:resposta.data,exibirUsuarioEncontrado:true})
			}).catch((error) => {
				console.log("Este Erro aqui",error)
		})	
			this.setState({buscarNome:''})

	}

	//renderização do conteúdo na tela
	render(){
		let arrayUsuarios = ''
		let usuarioDetalhes = ''
		let buttonVoltar = ''
		
		if(this.state.showDetalhesUsuario === true){
			usuarioDetalhes = <DetalheUsuario
								nomeDoUsuario={this.state.detalhesUsuario.name}
								emailDoUsuario={this.state.detalhesUsuario.email}
								botaoDeletar={() => this.deletarUsuario(this.state.detalhesUsuario.id) }
								fecharDetalhes={this.fecharDetalhes}
								editarUsuario={this.editarUsuario}
								usuarioEditar={this.state.editarUsuario}
								mudarEmail={this.mudarEmail}
								mudarNome={this.mudarNome}
								salvarUsuario={this.salvarUsuario}
								cancelarEditar={this.cancelarEditar}
							  />
		}

		let usuarios = this.state.listaDeUsuarios.map((usuario) => {
			return(
				<UsuarioTr key={usuario.id}>
						<UsuarioTh1>{usuario.name}<UsuarioSpan onClick={() => this.openDetalhes(usuario.id)}> + </UsuarioSpan></UsuarioTh1>
						<UsuarioTh2><UsuarioDeleteButton onClick={() => this.deletarUsuario(usuario.id)}> x </UsuarioDeleteButton></UsuarioTh2>
				</UsuarioTr>
			)
		})

		if(this.state.exibirUsuarioEncontrado === false){
			arrayUsuarios = usuarios
		}else{
			arrayUsuarios = <UsuarioTr key={this.state.listaDeBusca.id}>
								<UsuarioTh1>{this.state.listaDeBusca.name}<UsuarioSpan onClick={() => this.openDetalhes(this.state.listaDeBusca.id)}> + </UsuarioSpan></UsuarioTh1>
								<UsuarioTh2><UsuarioDeleteButton onClick={() => this.deletarUsuario(this.state.listaDeBusca.id)}> x </UsuarioDeleteButton></UsuarioTh2>
							</UsuarioTr>
			buttonVoltar = <ButtonVoltar onClick={this.fecharDetalhes}>voltar</ButtonVoltar>
		}
		return(
			<UsuarioDiv>
			<Busca
				inputControladoBusca={this.inputControladoBusca}
				nomeABuscar={this.state.buscarNome}
				buscaNome={this.buscaNome}
			/>
				<UsuariosCenter>
				    <UsuarioH2>Usuários Cadastrados </UsuarioH2>
				    {usuarioDetalhes}
					<UsuarioTabela>
							<UsuarioHead>
								<UsuarioHeadCol1>Nome Cadastrado<span>Detalhes</span></UsuarioHeadCol1>
								<UsuarioHeadCol2>Deletar Usuario</UsuarioHeadCol2>
							</UsuarioHead>
						<UsuarioTbody>
							{arrayUsuarios}
							{buttonVoltar}
						</UsuarioTbody>
					</UsuarioTabela>
				</UsuariosCenter>
			</UsuarioDiv>
		)
	}
}
export default Usuarios