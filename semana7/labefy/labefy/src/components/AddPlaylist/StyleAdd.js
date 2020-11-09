import React from 'react'
import Styled from 'styled-components'

export const TitleAdd = Styled.h1`
	text-transform:uppercase;
	text-align:center;
	font-weight:800;
	color:#ed174d;
	font-size:22px;
	padding:20px 5px;
	border-bottom: 1px solid #ed174d;
	margin:0 10px 20px 10px;
	width:90%;
`;
export const DivAdd = Styled.div`
	width:90vw;
	margin:0 auto;
	height:90vh;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
`;
export const InputAdd = Styled.input`
	width:80%;
	padding: 6px 16px;
	font-size: 0.875rem;
	box-sizing: border-box;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
	border: 1px solid #ed174d;
	margin:0 10px;
	box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
	&:focus{
		outline:none;
	}
`;
export const InputsDiv = Styled.div`
	width:90%;
	margin:0 auto;
	display:flex;
	justify-content:center;
	align-items:center;
`;
export const DivAviso = Styled.div`
	width:90%;
	padding: 6px 16px;
	font-size: 0.875rem;
	box-sizing: border-box;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
	border: 1px solid #ed174d;
	margin:0 10px;
	box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
	text-align:center;
`;