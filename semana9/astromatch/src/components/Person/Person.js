import React,{useState,useEffect} from 'react'
import Styled,{keyframes} from 'styled-components'
import FooterContainer from '../FooterContainer/FooterContainer'
import axios from 'axios'

import Carregando from '../../img/carregando.gif'




//Estilos

const ImagePessoa = Styled.img`
	width:100%;
	height:auto;
`;

const ConPessoa = Styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:95%;
	margin:0 auto;
	height: calc(100vh - 130px);
	position:relative;
	padding:20px 0;
`;

const DivImg = Styled.div`
	overflow:hidden;
	border-radius:10px;
	box-shadow:2px 2px 5px #ddd;
`;
const DivInfo = Styled.div`

`;
const H2Info = Styled.h2`
	color:#6c489d;
	text-transform:uppercase;
`;
const PInfo = Styled.p`

`;
//Componente
function Person(props){

  return(
			<ConPessoa>
				<DivImg> 
					{props.pessoa.photo ? <ImagePessoa src={props.pessoa.photo} alt={props.pessoa.nome}/> : <ImagePessoa src={Carregando}/> }   
				</DivImg>
				<DivInfo>
					<H2Info>{props.pessoa.name}</H2Info>
      				<PInfo>{props.pessoa.bio}</PInfo>
				</DivInfo>
			</ConPessoa>

    )
}


export default Person