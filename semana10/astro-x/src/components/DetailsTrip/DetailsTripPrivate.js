import React,{useEffect,useState} from 'react'
import {useRequestApiWidthHeaders} from '../API/Api'
import {useHistory,useParams} from 'react-router-dom'
import {ItemsDetails,DetailsDiv,TitleColumn,TitleContentTrips,Text,ButtonRight} from '../../assets/styles/Styles'
import axios from 'axios'


const DetailsTrip = () => {
	const pathParams = useParams()
	const myTripsDetails = useRequestApiWidthHeaders(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trip/${pathParams.id}`)
	const history = useHistory()
	const mostrar = () => {
		console.log(myTripsDetails.candidates)
	}

	const [body,setBody] = useState({})

	const logout = () => {
		localStorage.removeItem('token')
		history.push('/login')
	}

	const candidates = myTripsDetails && myTripsDetails.candidates

	const aproveCandidate = (id) => {
		setBody({approve:true})
		getDecideCandidate(id,body)
	}
	const reproveCandidate = (id) => {
		setBody({approve:false})
		getDecideCandidate(id,body)
	}

	const getDecideCandidate = (id,body) => {
		const tripId = pathParams
		const header = {
			headers: {
				auth: localStorage.getItem('token')
			}
		}
			axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips/${tripId}/candidates/${id}/decide`,body,header)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err.message)
			})
		}

		return(
		
		<div>
			<ItemsDetails>
				<DetailsDiv>
					<p>Destino:</p>
					<TitleColumn>{myTripsDetails.planet}</TitleColumn>
				</DetailsDiv>
				<DetailsDiv>
					<p>Data da Partida:</p>
					<TitleColumn>{myTripsDetails.date}</TitleColumn>
				</DetailsDiv>
				<DetailsDiv>
					<p>Duração:</p>
					<TitleColumn>{myTripsDetails.durationInDays} dias</TitleColumn>
				</DetailsDiv>
			</ItemsDetails>
			<div>
				<div>
					<TitleContentTrips>Candidatos <ButtonRight onClick={logout}>sair</ButtonRight></TitleContentTrips>
				</div>
				<div>
					{candidates != undefined ? 
						candidates.map((cand) => {
							return (
										<div>
											<div>
												<div>Nome: </div>
												<div>{cand.name}</div>
											</div>
											<div>
												<div>Profissão: </div>
												<div>{cand.profession}</div>
											</div>
											<div>
												<div>Idade: </div>
												<div>{cand.age}</div>
											</div>
											<div>
												<div>País: </div>
												<div>{cand.country}</div>
											</div>
											<div>
												<div>Porque deveria ir: </div>
												<div>{cand.applicationText}</div>
											</div>
											<button onClick={() => aproveCandidate(cand.id)}>Aprovar</button>
											<button onClick={() => reproveCandidate(cand.id)}>Reprovar</button>
										</div>
									)
						}) 
					: ''}
				</div>
			</div>

		</div>
		)
}

export default DetailsTrip