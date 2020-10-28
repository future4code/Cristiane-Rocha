import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import CadastroImg from '../../img/cadastro.jpg'


const CadastroDiv = Styled.div`
	width: 100vw;
	height:100vh;
	background-image: url(${CadastroImg});
	background-size:cover;
	display:flex;
	flex-direction: column;
	justify-content:space-between;
	align-items:center
`;
const CadastroInputs = Styled.div`
	width:60%;
	height:60%;
	display:flex;
	background:#ffffff90;
	flex-direction: column;
	margin-top:20px;
	box-shadow: 2px 2px 5px #888;
`;

const CadastroInnput = Styled.input`
	width:70%;
	text-align:left;
	color: #888;
	height:40px;
	margin: 10px auto;
	border-radius:10px;
	font-size:20px;
	border: 1px solid #888;
	padding-left:10px;
	&:focus{
		outline:none;
	}
`;

const CadastroButton = Styled.button`
	background-color: #17efa4;
	color: #fff;
	text-transform:uppercase;
	font-weight:800;
	height:40px;
	border-radius:10px;
	border:none;
	width:35%;
	margin: 10px auto;
	display:block;
	cursor:pointer;
	transition: .3s ease-in-out;
	&:hover{
		background:#2aaa7e;
		transition: .3s ease-in-out;
	}
	&:focus{
		outline:none;
	}
`;
const CadastroH2 = Styled.h2`
	color: #888;
	padding:10px;
	text-transform:uppercase;
	text-align:center;
	font-size:30px;
`;


class Cadastro extends React.Component{
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
			alert("Houve algum erro ao cadastrar, verifique os dados digitados !")
			console.log("Este Erro aqui",error)
		})
	}

	render(){
		return(
			<CadastroDiv>
					<CadastroInputs>
						<CadastroH2>Cadastrar Usuários</CadastroH2>
						<CadastroInnput type="text" placeholder='Digite seu Nome' value={this.state.UsuarioCadastrado} onChange={this.recebeNome}/>
						<CadastroInnput type="email" placeholder='Digite seu Email' value={this.state.EmailCadastrado} onChange={this.recebeEmail} />
						<CadastroButton onClick={this.cadastrarUsuario}> Salvar </CadastroButton>
				</CadastroInputs>
			</CadastroDiv>
			)
	}
}
export default Cadastro