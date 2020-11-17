import React from 'react'
import {useRequestApiWidthHeaders} from '../API/Api'
import {useHistory,useParams} from 'react-router-dom'
import {ItemsDetails,DetailsDiv,TitleColumn,TitleContentTrips,Text} from '../../assets/styles/Styles'


const DetailsTrip = () => {
	const pathParams = useParams()
	const myTripsDetails = useRequestApiWidthHeaders(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trip/${pathParams.id}`)
	const candidatos = myTripsDetails.candidates
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
					<TitleContentTrips>Candidatos</TitleContentTrips>
				</div>
				<div>

				</div>
			</div>
		</div>
		)
}

export default DetailsTrip