import React from 'react'
import {Container,ContentHome,ButtonRight} from '../../assets/styles/Styles'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import DetailsTrip from '../../components/DetailsTrip/DetailsTripPrivate'
import Header from '../../components/Header/Header'

const TripDetailsPrivatePage = () => {
	return(
			<Container>
				<SideColumnPrivate/>
				<ContentHome>
					<Header/>
					<DetailsTrip/>
				</ContentHome>
			</Container>
		)
}
export default TripDetailsPrivatePage