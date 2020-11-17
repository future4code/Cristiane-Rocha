import React from 'react'
import {Container,ContentHome,ButtonRight} from '../../assets/styles/Styles'
import SideColumn from '../../components/SideColumn/SideColumn'
import DetailsTrip from '../../components/DetailsTrip/DetailsTrip'


 const TripDetailsPage = () => {
	return(
			<Container>
				<SideColumn/>
				<ContentHome>
					<DetailsTrip/>
					<ButtonRight> Inscrever-se </ButtonRight>
				</ContentHome>
			</Container>
		)
}
export default TripDetailsPage