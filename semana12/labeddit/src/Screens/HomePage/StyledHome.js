import react from 'react'
import styled from 'styled-components'
import {TextField , Button }from '@material-ui/core';
import {Container} from '@material-ui/core';

export const ContainerHome = styled.section`
	display:flex;
	width:100vw;
	height:100vh;
	align-items:center;
	justify-content:space-around;
	flex-wrap:wrap;
`;
export const Con = styled(Container)`
	max-width:450px !important;
`;
export const Logo = styled.div`
	display:flex;justify-content:center;
	align-items:center;
	width:90%;
	height:30%;
	color:#888;
	justify-content:center;
	align-items:center;
	margin:20px 0;
	position:relative;
`;
export const LogoImg = styled.img`
	display:block;
	width:90%;
	height:auto;
`;


export const InputStyle = styled(TextField)`
	label{
		color:#ff6600 !important;
	}
	.MuiInput-underline:before{
		border-bottom:1px solid #ff6600 !important;
	}
`;
export const MyButton = styled(Button)`
	margin:20px auto !important;
	color:#fff !important;
	border-radius:25px !important;
	display: block !important;
`;
export const TitlePageLogin = styled.h2`
	color:#ff6600;
	font-weight:400;
	text-align:center;
`;
export const TextCadastro = styled.p`
	text-align:center;
	color:#888;
`;