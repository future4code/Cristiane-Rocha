import React from 'react'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import {Container,ItemDetailsTrip,DivDetailsTrip,IconItem,Icon,TitleContent,TextItem,TitleItem,ContentHome,ButtonRight,FeatureTrip,TitleContentTrips,ItemsTrips,ItemTrips,Planet,ButtonSeeMore} from '../../assets/styles/Styles'
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
					<TitleContent>Administre Viagens e Candidatos</TitleContent>
				</FeatureTrip>
				<div>
					<TitleContentTrips><div><ButtonRight red onClick={logout}>sair</ButtonRight> <ButtonRight onClick={goToCreateTripPage}>Adcionar Viagem</ButtonRight> </div> Viagens ↴</TitleContentTrips>
					<ItemsTrips>
						{myTrips.map((trip) => {
			     			 return (
			     			 			<ItemTrips key={trip.id}>
			     			 				<Planet>{trip.planet}</Planet>
			     			 				<DivDetailsTrip>
				     			 				<ItemDetailsTrip><Icon><i class="fas fa-calendar-alt"></i></Icon><IconItem><p>Data de partida: </p><h4>{trip.date}</h4></IconItem></ItemDetailsTrip>
				     			 				<ItemDetailsTrip><Icon><i class="fas fa-hourglass-half"></i></Icon><IconItem><p>Duração em dias: </p><h4>{trip.durationInDays}</h4></IconItem></ItemDetailsTrip>
				     			 			</DivDetailsTrip>
			     			 				<TitleItem>{trip.name}</TitleItem>
			     			 				<TextItem>{trip.description}</TextItem>
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