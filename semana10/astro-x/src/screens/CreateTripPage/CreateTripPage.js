import React,{useState} from 'react'
import FormCreateTrip from '../../components/Forms/FormCreateTrip'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import Header from '../../components/Header/Header'


const CreateTripPage = () => {

	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Criar Viagem</TitleContentTrips>
					<FormCreateTrip/>
				</ContentForms>
			</Container>
		)
}
export default CreateTripPage