import React from 'react'
import Styled from 'styled-components'


const DivDetalhes = Styled.div`
	background:#ddd;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	box-shadow: 2px 2px 5px #888;
	width:75%;
	height:70%;
	display:grid;
	grid-template-columns:1fr;
	justify-content:center;
	position:absolute;
	z-index:9999;
`;
const H3Detalhes = Styled.h3`
	color:#6c489d;
	text-transform:uppercase;
	font-weight:700;
`;
const DetalhesItem = Styled.span`
	color:#000;
	font-weight:700;
	text-transform:uppercase;
`;
const PDetalhes = Styled.p`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:90%;
	background:#fff;
	height:50px;
	margin:0 auto;
	padding:0 10px;
	border:1px solid #888;
`;
const InputDetalhes = Styled.input`
	display:block;
	height:40px;
	width:100%;
	text-align:center;
	border:none;
	background:none;
	font-family:arial;
	font-size:18px;
	color:#3f3f3f;
	font-weight:700;
	text-transform:uppercase;
	&:focus{
		outline:none;
	}
`;
const ButtonDetalhesSair = Styled.button`
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
const ButtonDetalhesDelete = Styled.button`
	background-color: red;
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
		background:#ed174d;
		transition: .3s ease-in-out;
	}
	&:focus{
		outline:none;
	}
`;
const ButtonsDetalhes = Styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
`;
const SpanEditar = Styled.span`
	padding:5px 10px;
	background: #2aaa7e;
	color:#fff;
	border-radius:5px;
	cursor:pointer;
	&:hover{
		background:#17efa4;
	}
`;


class DetalheUsuario extends React.Component{
	render(){
		let btnEditarNome = ''
		if(this.props.mudarBotaoNome === true){
			btnEditarNome = <SpanEditar 
					 		onClick={this.props.abrirEditarNome}
					 	> Editar </SpanEditar>
		}else{
			btnEditarNome = <div><button onClick={this.props.salvarNome}>Salvar</button><button>Cancelar</button></div>
		}

		let btnEditarEmail = ''
		if(this.props.mudarBotaoEmail === true){
			btnEditarEmail = <SpanEditar 
					 		onClick={this.props.abrirEditarEmail}
					 	> Editar </SpanEditar>
		}else{
			btnEditarEmail = <div><button>Salvar</button><button>Cancelar</button></div>
		}
		return(
			<DivDetalhes>
				<H3Detalhes>Detalhes do Usuário </H3Detalhes>
				<PDetalhes>
					 <DetalhesItem>
					 	Nome: </DetalhesItem> 
					 	<InputDetalhes 
					 		readonly={this.props.editarNome} 
					 		onChange={this.props.mudarNome} 
					 		value={this.props.nomeDoUsuario}
					 	/> 
					 	{btnEditarNome}
				</PDetalhes>
				<PDetalhes>
					 <DetalhesItem>
					 	Email: </DetalhesItem> 
					 	<InputDetalhes 
					 		readonly={this.props.editarEmail} 
					 		onChange={this.props.mudarEmail} 
					 		value={this.props.emailDoUsuario}
					 	/> 
					 	{btnEditarEmail}
				</PDetalhes>

				<ButtonsDetalhes>
					<ButtonDetalhesDelete onClick={this.props.botaoDeletar}>Deletar Usuário </ButtonDetalhesDelete>
					<ButtonDetalhesSair onClick={this.props.fecharDetalhes}> Voltar </ButtonDetalhesSair>
				</ButtonsDetalhes>
			</DivDetalhes>
		)
	}
}
export default DetalheUsuario