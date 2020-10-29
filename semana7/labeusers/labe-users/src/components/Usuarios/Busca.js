import React from 'react'
import Styled from 'styled-components'

const CampoBusca = Styled.div`
	width:50%;
	height:60px;
	margin:10px auto;
	display:flex;
	justify-content:center;
	align-items:center;
`;

const InputBusca = Styled.input`
	width:calc(50% - 10px);
	height:30px;
	background:transparent;
	color:#888;
	border:1px solid #888;
	border-radius:10px;
	font-size:18px;
	margin-right:10px;
	padding-left:10px;
	&:focus{
		outline:none;
	}
`;
const ButtonBusca = Styled.button`
	background: #888;
	color:#fff;
	width:20%;
	height:35px;
	font-size:18px;
	font-weight:700;
	border:1px solid #888;
	border-radius:10px;
	cursor:pointer;
	&:focus{
		outline:none;
	}
	&:hover{
		background:#889;
	}
`;

class Busca extends React.Component{
	render(){
		return(
			<CampoBusca>
				<InputBusca onChange={this.props.inputControladoBusca} placeholder="Buscar por nome" value={this.props.nomeABuscar}/>
				<ButtonBusca onClick={this.props.buscaNome} >Buscar</ButtonBusca>
			</CampoBusca>
		)
	}
}

export default Busca 