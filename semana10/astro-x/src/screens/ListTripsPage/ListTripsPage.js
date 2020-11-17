import React from 'react'
import SideColumn from '../../components/SideColumn/SideColumn'
import {Container,ContentHome,FeatureTrip,TitleContentTrips,ItemsTrips,ItemTrips,Planet,ButtonSeeMore} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import {useRequestApi} from '../../components/API/Api'

export default function ListTripsPage(){
	const myTrips = useRequestApi('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips')
	const history = useHistory()
	const goToTtipDetailsPage = (id) => {
		history.push(`/trips/details/${id}`)
		console.log(id)
	}
	return(
		<Container>
			<SideColumn/>
			<ContentHome>
				<FeatureTrip>
					<h2>teste</h2>
				</FeatureTrip>
				<div>
					<TitleContentTrips>Viagens Disponiveis </TitleContentTrips>
					<ItemsTrips>
						{myTrips.map((trip) => {
			     			 return (
			     			 			<ItemTrips key={trip.id}>
			     			 				<Planet>{trip.planet}</Planet>
			     			 				<h3>{trip.name}</h3>
			     			 				<p>{trip.description}</p>
			     			 				<ButtonSeeMore onClick={() => goToTtipDetailsPage(trip.id)}>Veja Mais</ButtonSeeMore>
			     			 			</ItemTrips>
			     			 		)
			   			 })}
			   		</ItemsTrips>
				</div>
			</ContentHome>
		</Container>
	)
}