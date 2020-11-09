import React from 'react'
import Styled from 'styled-components'
import UsuarioImg from '../../../img/usuarios.jpg'



export const UsuarioDiv = Styled.div`
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

export const UsuarioTabela = Styled.div`
	width:90%;
	height:auto;
	display:block;
	position:relative;
`;
export const UsuarioHead = Styled.div`
	width:100%;
	height:40px;
	display:flex;
	justify-content:space-around;
	align-items:center;
	position:relative;
`;
export const UsuarioHeadCol1 = Styled.div`
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
export const UsuarioHeadCol2 = Styled.div`
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
export const UsuarioTbody = Styled.div`
	width:100%;
`;
export const UsuarioTr = Styled.div`
	width:100%;
	height:40px;
	display:flex;
	justify-content:space-around;
	align-items:center;
	position:relative;
`;
export const UsuarioTh1 = Styled.div`
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
export const UsuarioTh2 = Styled.div`
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
export const UsuarioDeleteButton = Styled.button`
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
export const UsuarioH2 = Styled.h2`
	color: #888;
	text-transform:uppercase;
	text-align:center;
	padding:20px 0;
	font-size:30px;
`;
export const UsuariosCenter = Styled.div`
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
export const UsuarioSpan = Styled.span`
	color: #2aaa7e;
	font-weight:700;
	font-size:20px;
	cursor:pointer;
	text-align:center;
	&:hover{
		color:#17efa4;
	}
`;
export const ButtonVoltar = Styled.button`
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
