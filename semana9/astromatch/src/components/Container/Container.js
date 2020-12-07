import React, {useState,useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import Person from '../Person/Person'
import FooterContainer from '../FooterContainer/FooterContainer'
import IsMatch from '../IsMatch/IsMatch'
import {FooterMach} from '../FooterContainer/FooterContainer'
import Matchs from '../Matchs/Matchs'
import Styled from 'styled-components'
import axios from 'axios'

//Infos API
const urlAPI = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:cristiane-rocha/person'
const urlAPIMatch = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cristiane-rocha/choose-person'
const urlApiShowMatchs = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cristiane-rocha/matches'
const urlApiClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cristiane-rocha/clear'
const headers = {
	headers:{
		aluno:'cristiane-rocha'
	}
}

const MainContainer = Styled.section`
	width:360px;
	height:auto;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	margin:10px auto;
	border:1px solid #ddd;
	border-radius:4px;
	box-shadow:2px 2px 5px #ccc;
	position:relative;
`;
//Componente

function Container(){

		//States
	const [pessoa,setPessoa] = useState('')
	const [showMatch,setShowMatch] = useState(false)
	const [matchs,setMatchs] = useState([])
	const [matchOk,setMatchOk] = useState(false)
	const [show,setShow] = useState(false)


	useEffect(() => {
		mostraPessoa()
	},[])

	//Passa pra próxima pessoa
	const mostraPessoa = () => {
		axios.get(urlAPI,headers).then((res) => {
			setPessoa(res.data.profile)
			setMatchOk(false)
		}).catch((err) => {
			console.log("Erro -> ",err)
		})
		setMatchOk(false)
	}
	//Da Match 
	const escolhePessoa = (id) => {
		const body = {
			id: id,
			choice: true
		}
		axios.post(urlAPIMatch,body,headers).then((res) => {
			if(res.data.isMatch === true){
				setMatchOk(true)
			}else{
				mostraPessoa()
			}
		}).catch((err) => {
			console.log("Erro -> ",err)
		})
		
	}
	
	//Mostra Matchs
	const exibeMatch = () => {
		setShowMatch(true)
		axios.get(urlApiShowMatchs,headers).then((res) => {
			setMatchs(res.data.matches)
			if(res.data.matches.length > 0){
				setShow(true)
			}		
		}).catch((err) => {
			console.log("Erro -> ",err)
		})
		setMatchOk(false)
	}
	//Fecha matchs
	const hiddenMatch = () => {
		setShowMatch(false)
	}
	let match = <Person pessoa={pessoa}/>
	let footer = <FooterContainer 
					mostraPessoa={mostraPessoa}
					escolhePessoa={escolhePessoa}
					pessoaId={pessoa.id}
				/>
	if(showMatch === true){
		match = <Matchs matchs={matchs} show={show} hiddenMatch={hiddenMatch}/>
		footer = <FooterMach/>
	}

	


	//Apagar matchs
	const clearMatchs = () => {
		axios.put(urlApiClear,headers).then((res) => {
			setMatchs([])
			setShow(false)
		}).catch((err) => {
			console.log("Erro -> ",err)
		})
	}

	let deuMatch = ''
	if(matchOk === true){
		deuMatch = <IsMatch mostraPessoa={mostraPessoa} exibeMatch={exibeMatch} />
	}
	return(
			<MainContainer>
				<NavBar
					exibeMatch={exibeMatch}
					hiddenMatch={hiddenMatch}
					showMatch={showMatch}
					clearMatchs={clearMatchs}
				/>
				{deuMatch}
				{match}
				{footer}

			</MainContainer>
		)
}
export default Container