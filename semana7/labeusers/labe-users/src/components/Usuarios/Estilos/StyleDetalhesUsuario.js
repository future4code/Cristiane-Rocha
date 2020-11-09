import React from 'react'
import Styled from 'styled-components'

export const DivDetalhes = Styled.div`
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
	align-items:center;
	position:absolute;
	z-index:9999;
`;
export const H3Detalhes = Styled.h3`
	color:#6c489d;
	text-transform:uppercase;
	font-weight:700;
`;
export const DetalhesItem = Styled.span`
	color:#000;
	font-weight:700;
	text-transform:uppercase;
	margin: 0 20px 0 0;
`;
export const PDetalhes = Styled.p`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:80%;
	height:50px;
	margin:0 auto;
	padding:0 10px;
	border-bottom:1px solid #888;
`;
export const InputDetalhes = Styled.input`
	display:block;
	height:40px;
	width:100%;
	text-align:center;
	border:1px solid #3f3f3f ;
	background:none;
	font-family:arial;
	font-size:18px;
	color:#3f3f3f;
	&:focus{
		outline:none;
	}
`;
export const SpanDetalhes = Styled.span`
	text-align:center;
	text-transform:uppercase;
	font-family:arial;
	font-size:18px;
	color:#3f3f3f;
	width:100%;
	display:block;
`;
export const ButtonDetalhesSair = Styled.button`
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
export const ButtonDetalhesDelete = Styled.button`
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
export const ButtonsDetalhes = Styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
`;
export const ButtonsEditarSalvar = Styled.div`
	display:grid;
	grid-templat-columns: 1fr 1fr;
	justify-content:space-between;
	align-items:center;
	width:90%;
	margin:10px auto;
`;
export const SpanEditar = Styled.span`
	padding:5px 10px;
	background: #2aaa7e;
	color:#fff;
	border-radius:5px;
	cursor:pointer;
	&:hover{
		background:#17efa4;
	}
`;
export const BotaoSalvar = Styled.button`
	padding:5px 10px;
	color:#fff;
	background:#2aaa7e;
	border-radius:3px;
	border:none;
	margin-right:10%;
	grid-column:2;
	cursor:pointer;
	&:hover{
		background:#17efa4;
	}
	&:focus{
		outline:none;
	}
`;
export const BotaoCancelar = Styled.button`
	padding:5px 10px;
	color:#fff;
	background:#1e1e1e;
	border-radius:3px;
	border:none;
	margin-right:10%;
	grid-column:1;
	cursor:pointer;
	&:hover{
		background:#3f3f3f;
	}
	&:focus{
		outline:none;
	}
`;
