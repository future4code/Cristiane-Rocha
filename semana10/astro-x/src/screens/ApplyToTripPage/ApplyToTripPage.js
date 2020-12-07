import React,{useState} from 'react'
import FormApplyToTrip from '../../components/Forms/FormApplyToTrip'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import Header from '../../components/Header/Header'
import {useHistory,useParams} from 'react-router-dom'



const CreateTripPage = () => {
	const pathParams = useParams()
	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Inscrever-se para a viagem: <span>{pathParams.name}</span></TitleContentTrips>
					<FormApplyToTrip/>
				</ContentForms>
			</Container>
		)
}
export default CreateTripPage