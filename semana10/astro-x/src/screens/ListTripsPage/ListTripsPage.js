import React from 'react'
import SideColumn from '../../components/SideColumn/SideColumn'
import {Container,DivDetailsTrip,ItemDetailsTrip,ContentHome,FeatureTrip,TitleContentTrips,ItemsTrips,ItemTrips,Planet,ButtonSeeMore} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import {useRequestApi} from '../../components/API/Api'
import Header from '../../components/Header/Header'

export default function ListTripsPage(){
	const myTrips = useRequestApi('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips')
	const history = useHistory()
	const goToApplyToTripPage = (id,name) => {
		history.push(`/trips/apllyToTrip/${id}/${name}`)
	}
	return(
		<Container>
			<SideColumn/>
			<ContentHome>
				<Header/>
				<FeatureTrip>
					<h2>teste</h2>
				</FeatureTrip>
				<div>
					<TitleContentTrips>Viagens Disponiveis </TitleContentTrips>
					<ItemsTrips>
						{myTrips.map((trip,ind,trips) => {
			     			 return (
			     			 			<ItemTrips key={trip.id}>
			     			 				<Planet>{trip.planet}</Planet>
			     			 				<DivDetailsTrip>
				     			 				<ItemDetailsTrip><p>Data de partida: </p><h4>{trip.date}</h4></ItemDetailsTrip>
				     			 				<ItemDetailsTrip><p>Duração em dias: </p><h4>{trip.durationInDays}</h4></ItemDetailsTrip>
				     			 			</DivDetailsTrip>
			     			 				<h3>{trip.name}</h3>
			     			 				<p>{trip.description}</p>
			     			 				<ButtonSeeMore onClick={() => goToApplyToTripPage(trip.id,trip.name)}>Inscrever-se</ButtonSeeMore>
			     			 			</ItemTrips>
			     			 		)
			   			 })}
			   		</ItemsTrips>
				</div>
			</ContentHome>
		</Container>
	)
}