import React from 'react'
import Styled, {keyframes} from 'styled-components'



const DivMatchs = Styled.div`
	width:95%;
	display:flex;
	justify-content:space-around;
	align-items:center;
	height:120px;
	box-shadow: 2px 2px 5px #ccc;
	margin:10px auto;
	background: rgb(108,72,157);
	background: linear-gradient(90deg, rgba(108,72,157,1) 0%, rgba(136,94,193,1) 51%, rgba(161,121,216,1) 100%);
	border-radius:10px;
	box-shadow:2px 2px 5px #ddd;
`;
const Div = Styled.div`
	width:95%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	height:auto;
	box-shadow: 2px 2px 5px #ccc;
	margin:10px auto;
	background: rgb(108,72,157);
	background: linear-gradient(90deg, rgba(108,72,157,1) 0%, rgba(136,94,193,1) 51%, rgba(161,121,216,1) 100%);
	border-radius:10px;
	box-shadow:2px 2px 5px #ddd;
	padding:25px 0;
`;
const DivImg = Styled.div`
	width:100px;
	height:100px;
	overflow:hidden;
	position:relative;
	border-radius:50%;
	margin-left:10px;
`;
const ImgMatch = Styled.img`
	width:180%;
	height:auto;
	margin-left:50%;
	transform:translateX(-50%);

`;
const DivInfo = Styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:70%;
	height:95%;
`;

const H2Info = Styled.h2`
	text-transform:uppercase;
	color:#fff;
`;
const PDiv = Styled.p`
	color:#ddd;
	font-size:16px;
	font-weight:600;
	padding:10px;
`;
const Button1 = Styled.button`
	background:#ef436e;
	border-radius:5px;
	border:none;
	outline:none;
	color:#fff;
	padding:10px 15px;
	&:hover{
		background:#ef436e95;
	}
	cursor:pointer;
	text-transform:uppercase;
	font-weight:600;
`;
function Matchs(props){
	let listaDeMatchs = ''
	if(props.show === true){
			listaDeMatchs = props.matchs.map((mat) => {
      		return (
      				<DivMatchs key={mat.id}>
      					<DivImg >
      						<ImgMatch src={mat.photo} alt={mat.name}/>
      					</DivImg>
      					<DivInfo>
      						<H2Info>{mat.name}</H2Info>
      					</DivInfo>

      				</DivMatchs>
      			)
      	})
	}else{
		listaDeMatchs = <Div><H2Info>Sem Matches?</H2Info><PDiv>Continue navegando e encontre sua alma gêmea</PDiv><Button1 onClick={props.hiddenMatch}>Encontrar minha alma gêmea</Button1></Div>
	}
	
 
  return(
      <div>
      	{listaDeMatchs}
      </div>

    )
}


export default Matchs