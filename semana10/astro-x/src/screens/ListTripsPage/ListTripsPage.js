import React from 'react'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import {Container,DivDetailsTrip,TitleItem,TextItem,Icon,ItemDetailsTrip,IconItem,TitleContent,ContentHome,FeatureTrip,TitleContentTrips,ItemsTrips,ItemTrips,Planet,ButtonSeeMore} from '../../assets/styles/Styles'
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
			<SideColumnPrivate/>
			<ContentHome>
				<Header/>
				<FeatureTrip>
					<TitleContent white>Se aventure nas galaxias!</TitleContent>
				</FeatureTrip>
				<div>
					<TitleContentTrips>Viagens Disponiveis </TitleContentTrips>
					<ItemsTrips>
						{myTrips.map((trip,ind,trips) => {
			     			 return (
			     			 			<ItemTrips key={trip.id}>
			     			 				<Planet>{trip.planet}</Planet>
			     			 				<DivDetailsTrip>
				     			 				<ItemDetailsTrip><Icon><i class="fas fa-calendar-alt"></i></Icon><IconItem><p>Data de partida: </p><h4>{trip.date}</h4></IconItem></ItemDetailsTrip>
				     			 				<ItemDetailsTrip><Icon><i class="fas fa-hourglass-half"></i></Icon><IconItem><p>Duração em dias: </p><h4>{trip.durationInDays}</h4></IconItem></ItemDetailsTrip>
				     			 			</DivDetailsTrip>
			     			 				<TitleItem>{trip.name}</TitleItem>
			     			 				<TextItem>{trip.description}</TextItem>
			     			 				<ButtonSeeMore grey onClick={() => goToApplyToTripPage(trip.id,trip.name)}>Inscrever-se</ButtonSeeMore>
			     			 			</ItemTrips>
			     			 		)
			   			 })}
			   		</ItemsTrips>
				</div>
			</ContentHome>
		</Container>
	)
}