import React from 'react'
import Styled from 'styled-components'
import Espaco from '../img/espaco.jpg'
import Galaxia from '../img/galaxia.jpg'
import media from './media'


export const Container = Styled.div`
	display:flex;
	${media.brotherbear`
      display:grid;
      grid-template-columns:1fr;
   `}
`;
export const ContentHome = Styled.div`
	position:relative;
	top:0;
	right:0;
	width:80%;
	display:block;
	left:20%;
	${media.brotherbear`
      width:100%;
      position:static;
   `}
`;
export const FeatureTrip = Styled.div`
	width:100%;
	height:100px;
	display:flex;
	justify-content:center;
	align-items:center;
`;
export const TitleContentTrips = Styled.h2`
	padding:10px 35px 10px 10px;
	margin: 25px 0;
	border-bottom:1px solid #70465a;
	width:95%;
	text-transform:uppercase;
	display: flex;
	justify-content:space-between;
	color:#70465a;
	align-items:center;
	span{
		color:#fff;
		text-shadow:2px 2px 5px #ddd;
	}
	${media.brotherbear`
      flex-direction:column;
   `}
`;
export const TitleContent = Styled.h2`
	padding:10px 35px 10px 10px;
	margin: 50px 0;
	font-size:35px;
	width:95%;
	text-transform:uppercase;
	display: flex;
	justify-content:center;
	text-align:center;
	align-items:center;
	color:${props => props.white ? '#ffffff' : '#70465a' };
	${media.brotherbear`
      padding-top:40px;
   `}

`;
export const ItemsTrips = Styled.div`
	display:grid;
	grid-template-columns:repeat(3,1fr);
	grid-gap:10px;
	${media.brotherbear`
      grid-template-columns:auto;
   `}
`;
export const ItemTrips = Styled.div`
	display:flex;
	flex-direction:column;
	height:auto;
	background:#70465a;
	justify-content:space-around;
	align-items:center;
`;
export const Planet = Styled.div`
	width:95%;
	height:100px;
	display:flex;
	justify-content:center;
	align-items:center;
	margin:10px auto;
	color:#ddd;
	text-transform:uppercase;
	font-weight:700;
	font-size:30px;
	border-bottom:1px solid #ddd;
`;
export const ButtonSeeMore = Styled.button`
	padding:10px 15px;
	border-radius:5px;
	background:#fff;
	color:#70465a;
	display:block;
	margin:10px auto;
	cursor:pointer;
	font-weight:600;
	transition:.3s ease-in-out;
	border:none;
	&:hover{
		background:${props => props.grey ? '#ccc' : '#70465a'};
		color:${props => props.grey ? '#70465a' : '#fff'};
	}
	&:focus{
		outline:none;
	}
`;
export const ButtonRight = Styled.button`
	padding:auto 20px;
	width:${props => props.red ? '60px' : '150px'};
	height:40px;
	border-radius:5px;
	background:${props => props.red ? '#ef6c2f' : '#70465a'};
	font-weight:600;
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
export const ButtonDiv = Styled.div`
	width:95%;
	margin:10px auto;
	display:flex;
	justify-content:flex-end;
	${media.brotherbear`
	margin:40px auto 0;
	justify-content:center;
   `}
`;
export const ButtonAprove = Styled.button`
	width:150px;
	height:40px;
	border-radius:5px;
	background: '#fff';
	font-weight:600;
	color:#70465a;
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
	background-image:url(${Espaco});
	background-size: cover;
	padding:40px 20px 20px ;
	box-sizing:border-box;
	border-right:1px solid #ccc;
	${media.brotherbear`
      width:105%;
      position:static;
      height:80px;
      display:block;
      padding:0;
      margin:-10px -10px 0 -8px;
   `}
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
	color:#fff;
`;
export const TitleItem = Styled.h3`
	text-align:center;
	padding: 10px;
	text-transform:uppercase;
	color:#fff;
	font-weight:700;
`;
export const TextItem = Styled.p`
	text-align:center;
	padding: 10px;
	color:#ddd;
	font-weight:400;
`;
export const TitleAstroX = Styled.h1`
	text-align:center;
	color:#fff;
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
	color:#fff;
	${media.brotherbear`
     writing-mode:horizontal-tb; 
     width:100%;
     height:70px;
     display:block;
     font-size:35px;
   `}
`;
export const Content = Styled.div`
	width:100%;
	height:100vh;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	${media.brotherbear`
     height:auto;
     
   `}
`;
export const ContentForms = Styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:flex-end;
	position:relative;
	top:70px;
	right:0;
	width:80%;
	height:100vh;
	left:20%;
	${media.brotherbear`
     width:90%;
     justify-content:center;
     align-items:center;
     position:static;
     margin:50px auto 10px;
   `}
`;
export const Button = Styled.button`
	width:40%;
	height:70px;
	border-radius:10px;
	background: linear-gradient(0deg, rgba(78,56,78,1) 0%, rgba(112,70,90,1) 100%);
	color:#fff;
	text-transform:uppercase;
	transition:.3s ease-in-out;
	font-size:25px;
	display:block;
	margin:10px;
	cursor:pointer;
	border:none;
	&:hover{
		background: linear-gradient(0deg, rgba(112,70,90,1) 0%, rgba(78,56,78,1) 100%);
		color:#fff;
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
	color:#70465a;
	text-transform:uppercase;
	padding:10px 0;
	width:100%;
	text-align:left;
`;

export const Input = Styled.input`
	width:100%;
	height:40px;
	border-radius:5px;
	border:1px solid #70465a;
	color:#70465a;
	background:transparent;
	padding-left:10px;
	&:focus{
		outline:none;
	}
`;
export const Textarea = Styled.textarea`
	width:100%;
	height:100px;
	border-radius:5px;
	border:1px solid #70465a;
	background:transparent;
	color:#70465a;
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
	background:#fff;
	margin:10px 5px;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-around;
	p{
		color:#888;
	}
	h3{
		color:#70465a;
		font-weight:700;
		text-transform:uppercase;
	}
	box-shadow:2px2px 5px #ddd;
`;
export const Text = Styled.p`
	display:block;
	padding:10px;
	height:150px;
`;
export const Menu = Styled.ul`
	width:102%;
	height:80px;
	display:flex;
	justify-content:space-between;
	align-items:center;
	margin:-10px -10px 0 -5px;
	padding: 0 40px 0 40px;
	box-sizing:border-box;
	margin-bottom:20px;
	position:fixed;
	top:0;
	left:0;
`;
export const MenuItem = Styled.li`
	list-style:none;
	cursor:pointer;
	color:#888;
	text-transform:uppercase;
`;
export const MenuDiv = Styled.div`
	width:40px;
	height:40px;
	display:flex;
	justify-content:center;
	align-items:center;
	background:#fff;
	border-radius:50%;
	cursor:poiter;
	&:hover{
		background:#70465a;
		fill:#fff;
	}
`;
export const SvgHome = Styled.svg`
	fill:#70465a;
	&:hover{
		fill:#fff;
	}
`;
export const SvgBack = Styled.svg`
	fill:#70465a;
	&:hover{
		fill:#fff;
	}
`;
export const DivDetailsTrip = Styled.div`
	width:95%;
	margin:10px auto;
	display:flex;
	justify-content:space-around;
	align-items:center;
`;
export const ItemDetailsTrip = Styled.div`
	width:48%;
	background:#ddd;
	display:flex;
	align-items:center;
	justify-content:space-between;
	`;
	export const IconItem = Styled.div`
		width:65%;
		text-align:center;
		h4{
			color:#70465a;
			font-size:16px;
			font-weight:700;
		}
	`;
export const Icon= Styled.div`
		width:30%;
		text-align:center;
		i{
			color:#70465a;
			font-size:16px;
			font-weight:700;
		}
	`;
export const CandidatesDiv = Styled.div`
	width:95%;
	margin: 10px auto;
	background:#70465a;
	padding:25px 0;
`;
export const CanditateItem = Styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:95%;
	margin:10px auto;
	height:40px;
	${media.brotherbear`
      display:block;
      height:85px;
   `}
`;
export const NameItem = Styled.p`
	width:20%;
	height:100%;
	display:flex;
	justify-content:flex-end;
	align-items:center;
	text-transform:uppercase;
	color:#fff;
	font-weight:600;
	${media.brotherbear`
		justify-content:flex-start;
		width:95%;
		margin:0 auto;
      height:48%;
   `}
`;
export const CandItem = Styled.p`
	width:78%;
	height:100%;
	display:flex;
	justify-content:flex-start;
	padding-left:10px;
	align-items:center;
	text-transform:uppercase;
	background:#fff;
	color:#70465a;
	font-weight:600;
	${media.brotherbear`
		width:95%;
		margin:0 auto;
      height:48%;
   `}
`;