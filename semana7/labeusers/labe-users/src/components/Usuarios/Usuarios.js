import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import UsuarioImg from '../../img/usuarios.jpg'
import DetalheUsuario from '../Usuarios/DetalheUsuario'


const UsuarioDiv = Styled.div`
	width: 100vw;
	height:100vh;
	background-image: url(${UsuarioImg});
	background-size:cover;
	background-repeat:no-repeat;
	display:flex;
	flex-direction: column;
	justify-content:flex-start;
	align-items:center
`;

const UsuarioTabela = Styled.div`
	width:90%;
	height:auto;
	display:block;
	position:relative;
`;
const UsuarioHead = Styled.div`
	width:100%;
	height:40px;
	display:flex;
	justify-content:space-around;
	align-items:center;
	position:relative;
`;
const UsuarioHeadCol1 = Styled.div`
	background:#888;
	border: 1px solid #888;
	text-transform:uppercase;
	color: #fff;
	width:calc(68% - 20px);
	height:100%;
	display:flex;
	align-items:center;
	padding: 0 10px;
	justify-content:space-between;
`;
const UsuarioHeadCol2 = Styled.div`
	background:#888;
	border: 1px solid #888;
	text-transform:uppercase;
	color: #fff;
	width:28%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
`;
const UsuarioTbody = Styled.div`
	width:100%;
`;
const UsuarioTr = Styled.div`
	width:100%;
	height:40px;
	display:flex;
	justify-content:space-around;
	align-items:center;
	position:relative;
`;
const UsuarioTh1 = Styled.div`
	border: 1px solid #888;
	text-transform:uppercase;
	color: #888;
	width:calc(68% - 20px);
	height:100%;
	display:flex;
	align-items:center;
	justify-content:space-between;
	padding: 0 10px;
	background:#fff;
`;
const UsuarioTh2 = Styled.div`
	border: 1px solid #888;
	text-transform:uppercase;
	color: #888;
	width:28%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	background:#fff;
`;
const UsuarioDeleteButton = Styled.button`
	background:transparent;
	border:none;
	text-transform:uppercase;
	color:red;
	font-size:25px;
	cursor:pointer;
	&:focus{
		outline:none;
	}
	&:hover{
		color:orange;
	}
`;
const UsuarioH2 = Styled.h2`
	color: #888;
	text-transform:uppercase;
	text-align:center;
	padding:20px 0;
	font-size:30px;
`;
const UsuariosCenter = Styled.div`
	background:#ffffff90;
	margin-top:20px;
	box-shadow: 2px 2px 5px #888;
	width:70%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	padding-bottom:30px;
`;
const UsuarioSpan = Styled.span`
	color: #2aaa7e;
	font-weight:700;
	font-size:20px;
	cursor:pointer;
	text-align:center;
	&:hover{
		color:#17efa4;
	}
`;


class Usuarios extends React.Component{
	state = {
		listaDeUsuarios:[],
		detalhesUsuario:'',
		showDetalhesUsuario:false,
		editarNome:true,
		botaoEditarNome:true,
		editarEmail:true,
		botaoEditarEmail:true
	}

	componentDidMount = () => {
		this.exibeUsuarios()
	}
	exibeUsuarios = () => {
		axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
			headers: {
				Authorization: "cristiane-da-rocha-dumont"
			}
		}).then((resposta) => {
			this.setState({
				listaDeUsuarios: resposta.data
			})
		}).catch((error) => {
			console.log("Este Erro aqui",error)
		})

	}

	deletarUsuario = (iD) => {
		const confirmaExclusao = window.confirm("Tem certeza que deseja deletar esse usuário? ")
		if(confirmaExclusao){
			axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${iD}`,{
			headers: {
				Authorization: "cristiane-da-rocha-dumont",
				id:iD
			}
			}).then((resposta) => {
				alert("Usuario deletado com sucesso!")
				console.log(resposta)
			}).catch((error) => {
				console.log(error)
			})
		}
		this.setState({showDetalhesUsuario:false})
	}
	componentDidUpdate = () => {
		axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
			headers: {
				Authorization: "cristiane-da-rocha-dumont"
			}
		}).then((resposta) => {
			this.setState({
				listaDeUsuarios: resposta.data
			})
		}).catch((error) => {
			console.log("Este Erro aqui",error)
		})
	}

	openDetalhes = (iD) => {
		axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${iD}`,{
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
	fecharDetalhes = () => {
		this.setState({showDetalhesUsuario:false})
	}
	abrirEditarNome = () => {
		this.setState({
			editarNome:false,
			botaoEditarNome:false
		})
	}
	abrirEditarEmail = () => {
		this.setState({
			editarEmail:false,
			botaoEditarEmail:false
		})
		console.log('chegou aqui')
	}
	mudarNome = (event) => {
		if(this.state.editarNome === false){
			this.setState({detalhesUsuario:{
			nome: event.target.value
		}})
		}		
	}
	mudarEmail = (event) => {
		if(this.state.editarEmail === false){
			this.setState({detalhesUsuario:{
			email: event.target.value
		}})
		}		
	}
	salvarNome = (iD) => {
		console.log("Cris")
		const body = {
			name: this.state.detalhesUsuario.nome,
			email: this.state.detalhesUsuario.email
		}
		console.log(body,iD)
		axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users//${iD}`,body,{
		headers: {
			Authorization: "cristiane-da-rocha-dumont",
			id:iD
		}
		}).then((resposta) => {
			alert("Usuario Salvo com sucesso!")
			console.log(resposta)
		}).catch((error) => {
			alert("deu erro")
			console.log(error)
		})

	}
	render(){
		let usuarioDetalhes = ''
		if(this.state.showDetalhesUsuario === true){
			usuarioDetalhes = <DetalheUsuario
								nomeDoUsuario={this.state.detalhesUsuario.name}
								emailDoUsuario={this.state.detalhesUsuario.email}
								botaoDeletar={() => this.deletarUsuario(this.state.detalhesUsuario.id) }
								fecharDetalhes={this.fecharDetalhes}
								editarNome={this.state.editarNome}
								abrirEditarNome={this.abrirEditarNome}
								abrirEditarEmail={this.abrirEditarEmail}
								mudarNome={this.mudarNome}
								mudarEmail={this.mudarEmail}
								mudarBotaoNome={this.state.botaoEditarNome}
								mudarBotaoEmail={this.state.botaoEditarEmail}
								salvarNome={() => this.salvarNome(this.state.detalhesUsuario.id) }
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
		return(
			<UsuarioDiv>
				<UsuariosCenter>
				    <UsuarioH2>Usuários Cadastrados </UsuarioH2>
				    {usuarioDetalhes}
					<UsuarioTabela>
							<UsuarioHead>
								<UsuarioHeadCol1>Nome Cadastrado<span>Detalhes</span></UsuarioHeadCol1>
								<UsuarioHeadCol2>Deletar Usuario</UsuarioHeadCol2>
							</UsuarioHead>
						<UsuarioTbody>
							{usuarios}
						</UsuarioTbody>
					</UsuarioTabela>
				</UsuariosCenter>
			</UsuarioDiv>
		)
	}
}
export default Usuarios