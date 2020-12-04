import react from 'react'
import Styled from 'styled-components'

export const MainContainer = Styled.section`
	width:100vw;
	padding:0 10%;
	box-sizing:border-box;
`;
export const ButtonDefault = Styled.input`
	width:150px;
	margin:10px auto;
	height:35px;
	border-radius:17px;
	background:${props => props.danger ? '#ed5e6a' : '#ff6600' };
	border:none;
	color:#fff;
	font-size:18px;
	cursor:pointer;
	font-weight:400;
	transition:.5s linear;
	&:focus{
		outline:none;
	}
	&:hover{
		background:#c95000;
	}
`;
