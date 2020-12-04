import react from 'react'
import styled from 'styled-components'
import {TextField , Button }from '@material-ui/core';
import {Container} from '@material-ui/core';

export const ContainerRegister = styled.section`
	height:100vh;
	width:90%;
	margin:0 auto;
	display:flex;
	justify-content:center;
	align-items:center;
`;
export const InputStyle = styled(TextField)`
	label{
		color:#ff6600 !important;
	}
	.MuiInput-underline:before{
		border-bottom:1px solid #ff6600 !important;
	}
`;
export const Con = styled(Container)`
	max-width:450px !important;
`;
export const TitleRegister = styled.h2`
	text-transform:uppercase;
	color:#ff6600;
	font-weight:400;
	text-align:center;
`;
export const MyButton = styled(Button)`
	margin:20px auto !important;
	color:#fff !important;
	border-radius:25px !important;
	display: block !important;
`;
