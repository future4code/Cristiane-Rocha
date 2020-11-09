import React from 'react'
import Styled from 'styled-components'

const CadastroButtonPage = Styled.button`
	background:transparent;
	border:none;
	color:#2aaa7e;
	text-transform:uppercase;
	font-weight: 800;
	cursor:pointer;
	&:hover{
		color: #17efa4;
	}
	&:before{
		content:"⤿";
		font-size:16px;
		padding-right:5px;
	}
	&:focus{
		outline:none;
	}
`;
const UsuarioButtonPage = Styled.button`
	margin: 20px 0;
	background:transparent;
	border:none;
	color:#2aaa7e;
	text-transform:uppercase;
	font-weight: 800;
	cursor:pointer;
	&:hover{
		color: #17efa4;
	}
	&:before{
		content:"+";
		font-size:16px;
		padding-right:5px;
	}
	&:focus{
		outline:none;
	}
`;
const LabeusersHeader = Styled.header`
	width:100%;
	display:flex;
	justify-content:space-around;
	padding: 10px;
`;
const LabeusersH1 = Styled.h1`
	color: #6c489d;
	text-transform:uppercase;
	text-align:center;
	font-size:30px;
`;

class Header extends React.Component{
	render(){
		return(
			<LabeusersHeader>
				<UsuarioButtonPage onClick={this.props.abrirPaginaCadastro} >
			  	 	Cadastrar Usuários
			   </UsuarioButtonPage>
			   <LabeusersH1>Cadastramento de Usuarios</LabeusersH1>
				<CadastroButtonPage onClick={this.props.abrirPaginaUsuarios}>
					Exibir Usuários Cadastrados
				</CadastroButtonPage>
			  </LabeusersHeader>
		)
	}
}

export default Header