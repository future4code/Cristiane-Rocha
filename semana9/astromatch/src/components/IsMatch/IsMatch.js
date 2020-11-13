import React from 'react'
import Styled from 'styled-components'
import Heart from '../../img/heart.svg'

const DivIsMatch = Styled.div`
	width:95%;
	height:60vh;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	border-radius:10px;
	box-shadow:2px 2px 5px #ccc;
	color:#fff;
	display:flex;
	justify-content:center;
	flex-direction:column;
	align-items:center;
	z-index:99999;
	background: linear-gradient(90deg, rgba(108,72,157,1) 0%, rgba(136,94,193,1) 51%, rgba(161,121,216,1) 100%);
`;
const Buttons = Styled.div`
	width:90%;
	margin:10px auto;
	display:flex;
	justify-content:space-around;
	align-items:center;
`;
const Button1 = Styled.button`
	background:#ef436e;
	border-radius:5px;
	border:none;
	outline:none;
	color:#fff;
	padding:10px 15px;
	&:hover{
		background:#ef436e95;
	}
	cursor:pointer;
	text-transform:uppercase;
	font-weight:600;
`;
const Button2 = Styled.button`
	background:#2aaa7e;
	border-radius:5px;
	border:none;
	outline:none;
	color:#fff;
	padding:10px 15px;
	&:hover{
		background:#2aaa7e95;
	}
	cursor:pointer;
	text-transform:uppercase;
	font-weight:600;

	font-size:12px;
`;
const H1 = Styled.h1`
background:url(${Heart}) no-repeat;
background-size:contain;
width:200px;
height:200px;
display:flex;
align-items:center;
justify-content:center;
text-transform:uppercase;
font-size:25px;
`;

function IsMatch(props){
	return (
		<DivIsMatch>
			<H1>Deu Match </H1>
			<Buttons>
			<Button1 onClick={props.exibeMatch}>Ver Matchs </Button1>
			<Button2 onClick={props.mostraPessoa}> Continuar Navegando </Button2>
			</Buttons>
		</DivIsMatch>
		)
}
export default IsMatch