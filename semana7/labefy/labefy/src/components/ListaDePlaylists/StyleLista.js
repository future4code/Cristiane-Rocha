import React from 'react'
import Styled from 'styled-components'

export const ItemLista = Styled.p`
	height:50px;
	width:90%;
	margin:0 auto;
	display:flex;
	justify-content:space-between;
	align-items:center;
	border-bottom:1px solid #ccc;
`;
export const TitlePlaylist = Styled.h2`
	text-transform:uppercase;
	font-weight:800;
	color:#2d302f;
	font-size:18px;
`;
export const PlayLists = Styled.div`
	width:90%;
	margin:0 auto;
	display:grid;
	grid-template-columns: auto;
`;
export const TitleList = Styled.h1`
	text-transform:uppercase;
	text-align:center;
	font-weight:800;
	color:#ed174d;
	font-size:22px;
	padding:20px 5px;
	border-bottom: 1px solid #ed174d;
	margin:0 10px 20px 10px;
`;
export const Buttons = Styled.div`
	display:flex;
	justify-content:space-between;
	width:38%;
`;