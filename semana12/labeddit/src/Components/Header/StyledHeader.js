import react from 'react'
import styled from 'styled-components'


export const HeaderStyle = styled.header`
	display:flex;
	width:100vw;
	box-sizing:border-box;
	padding: 0 5%;
	justify-content:space-between;
	height:50px;
	align-items:center;
	background:#ff6600;
	box-shadow:2px 2px 5px #ddd;
	z-index:999999;
	position:relative;
`;
export const ButtonBack = styled.button`
	width:40px;
	height:40px;
	color:#fff;
	font-size:30px;
	background:transparent;
	border:none;
	cursor:pointer;
	&:focus{
		outline:none;
	}
	&:hover{
		color:#ddd;
	}
`;
export const ButtonLogout = styled.button`
	width:40px;
	height:40px;
	color:#fff;
	font-size:25px;
	cursor:pointer;
	background:transparent;
	border:none;
	&:focus{
		outline:none;
	}
	&:hover{
		color:#ddd;
	}
`;
export const ButtonUsername = styled.p`
	width:auto;
	height:30px;
	display:flex;
	cursor:pointer;
	justify-content:center;
	align-items:center;
	font-size:25px;
	background:#fff;
	color:#888;
	padding: 0 10px;
	border-radius:5px;
	span{
		font-size:18px;
	}
	&:hover{
		color:#fff;
		background:#888;
	}
`;
export const ButtonUsernameAndLogout = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:40px;
`;
export const TitleApp = styled.h1`
	font-size:25px;
	color:#ff6600;
	cursor:pointer;
`;
export const ImgLogo = styled.img`
	display:block;
	width:90px;
	height:auto;
	margin-left:15px;
`;