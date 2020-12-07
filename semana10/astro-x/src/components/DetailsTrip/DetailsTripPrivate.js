import React,{useEffect,useState} from 'react'
import {useRequestApiWidthHeaders} from '../API/Api'
import {useHistory,useParams} from 'react-router-dom'
import {ItemsDetails,CandItem,TitleContent,ButtonDiv,DetailsDiv,ButtonAprove,ButtonRight,NameItem,CanditateItem,CandidatesDiv,TitleColumn,TitleContentTrips,Text} from '../../assets/styles/Styles'
import axios from 'axios'


const DetailsTrip = () => {
	const pathParams = useParams()
	const myTripsDetails = useRequestApiWidthHeaders(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trip/${pathParams.id}`)
	const token = localStorage.getItem('token')

	const history = useHistory()

	const mostrar = () => {
		console.log(myTripsDetails.candidates)
	}



	const logout = () => {
		localStorage.removeItem('token')
		history.push('/login')
	}

	const aproveCandidate = (id) => {
		const body = {"approve": true}
		axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips/${pathParams.id}/candidates/${id}/decide`,body,{
			headers: {
				auth:token
			}
		})
		.then((res) => {
			alert("Candidato Aprovado !") 
			
		})
		.catch((err) => {
			console.log(err.message)
		})
		
	}

	const candidates = myTripsDetails && myTripsDetails.candidates

	const deleteTrip = () => {
		axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips/${pathParams.id}`)
		.then((res) => {
			alert("Viagem apagada!")
			history.push('/trips/listPrivate')
		})
		.catch((err) => {
			console.log(err)
		})
	}


		return(
		
		<div>
		<TitleContent>Viagem para {myTripsDetails.name}</TitleContent>
			<ItemsDetails>
				<DetailsDiv>
					<p>Destino:</p>
					<h3>{myTripsDetails.planet}</h3>
				</DetailsDiv>
				<DetailsDiv>
					<p>Data da Partida:</p>
					<h3>{myTripsDetails.date}</h3>
				</DetailsDiv>
				<DetailsDiv>
					<p>Duração:</p>
					<h3>{myTripsDetails.durationInDays} dias</h3>
				</DetailsDiv>
			</ItemsDetails>
			<div>
				<div>
					<TitleContentTrips><div><ButtonRight red onClick={logout}>sair</ButtonRight><ButtonRight onClick={deleteTrip}><i class="fas fa-trash-alt"></i> Apagar Viagem</ButtonRight></div> Candidatos ↴</TitleContentTrips>
				</div>
				<div>
					{candidates != undefined ? 
						candidates.map((cand) => {
							return (
										<CandidatesDiv key={cand.id}>
											<CanditateItem>
												<NameItem>Nome: </NameItem>
												<CandItem>{cand.name}</CandItem>
											</CanditateItem>
											<CanditateItem>
												<NameItem>Profissão: </NameItem>
												<CandItem>{cand.profession}</CandItem>
											</CanditateItem>
											<CanditateItem>
												<NameItem>Idade: </NameItem>
												<CandItem>{cand.age}</CandItem>
											</CanditateItem>
											<CanditateItem>
												<NameItem>País: </NameItem>
												<CandItem>{cand.country}</CandItem>
											</CanditateItem>
											<CanditateItem>
												<NameItem>Porque deveria ir: </NameItem>
												<CandItem>{cand.applicationText}</CandItem>
											</CanditateItem>
											<ButtonDiv>
												<ButtonAprove onClick={() => aproveCandidate(cand.id)} >Aprovar</ButtonAprove>
											</ButtonDiv>
										</CandidatesDiv>
									)
						}) 
					: ''}
				</div>
			</div>

		</div>
		)
}

export default DetailsTrip