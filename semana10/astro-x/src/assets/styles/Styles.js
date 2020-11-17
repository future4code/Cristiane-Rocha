import React from 'react'
import Styled from 'styled-components'


export const Container = Styled.div`
	display:flex;
`;
export const ContentHome = Styled.div`
	position:relative;
	top:0;
	right:0;
	width:80%;
	display:block;
	left:20%;
`;
export const FeatureTrip = Styled.div`
	width:90%;
	height:200px;
	background:#ddd;
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:10px;
	margin:10px auto;
`;
export const TitleContentTrips = Styled.h2`
	padding:10px 35px 10px 10px;
	margin: 25px 0;
	border-bottom:1px solid #ccc;
	width:95%;
	text-transform:uppercase;
`;
export const ItemsTrips = Styled.div`
	display:grid;
	grid-template-columns:repeat(3,1fr);
	grid-gap:10px;
`;
export const ItemTrips = Styled.div`
	display:flex;
	flex-direction:column;
	height:auto;
	background:#ddd;
	border-radius:5px;
	justify-content:space-around;
	align-items:center;
`;
export const Planet = Styled.div`
	width:95%;
	height:100px;
	border-radius:5px;
	background:#fff;
	display:flex;
	justify-content:center;
	align-items:center;
	margin:10px auto;
`;
export const ButtonSeeMore = Styled.button`
	padding:10px 15px;
	border-radius:5px;
	background:#888;
	color:#fff;
	display:block;
	margin:10px auto;
	cursor:pointer;
	transition:.3s ease-in-out;
	border:none;
	&:hover{
		background:#fff;
		color:#888;
	}
	&:focus{
		outline:none;
	}
`;
export const ButtonRight = Styled.button`
	padding:auto 20px;
	width:150px;
	height:40px;
	border-radius:5px;
	background:#888;
	color:#fff;
	display:block;
	margin:40px 10px;
	float:right;
	cursor:pointer;
	transition:.3s ease-in-out;
	border:none;
	&:hover{
		background:#fff;
		color:#888;
	}
	&:focus{
		outline:none;
	}
`;
export const ContainerColumn = Styled.div`
	display:flex;
	flex-direction:column;
	width:20%;
	position:fixed;
	height:100vh;
	top:0;
	left:0;
	background:#fff;
	padding:20px;
	box-sizing:border-box;
	border-right:1px solid #ccc;
`;
export const ContentColumn = Styled.div``;
export const ImageColumn = Styled.img`
	display:block;
	width:90%;
	margin:20px auto;
`;
export const TitleColumn = Styled.h3`
	text-align:center;
	text-transform:uppercase;
`;
export const TitleAstroX = Styled.h1`
	text-align:center;
`;
export const TitleAstroXVertical = Styled.h1`
	writing-mode: vertical-lr; 
	height:100vh;
	text-align:center;
	width:50%;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:60px;
	cursor:poiter;
`;
export const Content = Styled.div`
	width:100%;
	height:100vh;
	display:flex;
	justify-content:center;
	align-items:center;
`;
export const ContentForms = Styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:flex-end;
	position:relative;
	top:0;
	right:0;
	width:80%;
	height:100vh;
	left:20%;
`;
export const Button = Styled.button`
	width:40%;
	height:70px;
	border-radius:10px;
	background:#888;
	color:#000;
	font-size:25px;
	display:block;
	margin:10px;
	cursor:pointer;
	transition:.3s ease-in-out;
	border:none;
	&:hover{
		background:#ccc;
		color:#888;
	}
	&:focus{
		outline:none;
	}
`;
export const Formulario = Styled.form`
	display:flex;
	flex-direction:column;
	align-items:flex-start;
	width:95%;
	margin:0 auto;
	justify-content:center;
`;
export const Label = Styled.label`
	font-size:18px;
	color:#888;
	text-transform:uppercase;
	padding:10px 0;
	width:100%;
	text-align:left;
`;

export const Input = Styled.input`
	width:100%;
	height:40px;
	border-radius:5px;
	border:1px solid #888;
	color:#888;
	padding-left:10px;
	&:focus{
		outline:none;
	}
`;
export const ItemsDetails = Styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:95%;
	flex-wrap:wrap;
`;
export const DetailsDiv = Styled.div`
	height:200px;
	width:300px;
	background:#ddd;
	border-radius:10px;
	margin:10px 5px;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-around;
`;
export const Text = Styled.p`
	display:block;
	padding:10px;
	height:150px;
`;
