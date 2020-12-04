import react from 'react'
import styled from 'styled-components'

export const ButtonVote = styled.button`
	border-radius:5px;
	width: 30px;
	height:30px;
	display:flex;
	justify-content:center;
	align-items:center;
	border:none;
	cursor:pointer;
	color:#ff6600;
	font-weight:700;
	font-size:25px;
	margin: 0 10px;
	&:focus{
		outline:none;
	}
`;