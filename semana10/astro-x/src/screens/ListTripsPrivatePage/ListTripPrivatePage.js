import React from 'react'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import {Container,ContentHome,ButtonRight,FeatureTrip,TitleContentTrips,ItemsTrips,ItemTrips,Planet,ButtonSeeMore} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import {useRequestApi} from '../../components/API/Api'
import Header from '../../components/Header/Header'

export default function ListTripsPage(){
	const myTrips = useRequestApi('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips')
	const history = useHistory()
	const goToTtipDetailsPage = (id) => {
		history.push(`/trips/detailsPrivate/${id}`)
	}

	const logout = () => {
		localStorage.removeItem('token')
		history.push('/login')
	}
	const goToCreateTripPage = () => {
		history.push('/trips/create')
	}
	return(
		<Container>
			<SideColumnPrivate/>
			<ContentHome>
				<Header/>
				<FeatureTrip>
					<h2>teste</h2>
				</FeatureTrip>
				<div>
					<TitleContentTrips>Viagens Disponiveis <div><ButtonRight onClick={logout}>sair</ButtonRight> <ButtonRight onClick={goToCreateTripPage}>Adcionar Viagem</ButtonRight> </div></TitleContentTrips>
					<ItemsTrips>
						{myTrips.map((trip) => {
			     			 return (
			     			 			<ItemTrips key={trip.id}>
			     			 				<Planet>{trip.planet}</Planet>
			     			 				<h3>{trip.name}</h3>
			     			 				<p>{trip.description}</p>
			     			 				<ButtonSeeMore onClick={() => goToTtipDetailsPage(trip.id)}>Administrar</ButtonSeeMore>
			     			 			</ItemTrips>
			     			 		)
			   			 })}
			   		</ItemsTrips>
				</div>
			</ContentHome>
		</Container>
	)
}