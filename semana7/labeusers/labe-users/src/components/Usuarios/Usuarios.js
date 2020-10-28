import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import UsuarioImg from '../../img/usuarios.jpg'


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
	width:68%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
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
	width:68%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
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


class Usuarios extends React.Component{
	state = {
		listaDeUsuarios:[]
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
		console.log("id pelo click",iD)
		axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${iD}`,{
			headers: {
				Authorization: "cristiane-da-rocha-dumont",
				id:iD
			}
		}).then((resposta) => {
			alert('Usuario: ' + resposta.data.users.name + "deletado com sucesso !")
			console.log(resposta)
		}).catch((error) => {
			console.log(error)
		})

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
	render(){
		let usuarios = this.state.listaDeUsuarios.map((usuario) => {
			return(
				<UsuarioTr key={usuario.id}>
						<UsuarioTh1>{usuario.name}</UsuarioTh1>
						<UsuarioTh2><UsuarioDeleteButton onClick={() => this.deletarUsuario(usuario.id)}> x </UsuarioDeleteButton></UsuarioTh2>
				</UsuarioTr>
			)
		})
		return(
			<UsuarioDiv>
				<UsuariosCenter>
				    <UsuarioH2>Usuários Cadastrados </UsuarioH2>
					<UsuarioTabela>
							<UsuarioHead>
								<UsuarioHeadCol1>Nome Cadastrado</UsuarioHeadCol1>
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