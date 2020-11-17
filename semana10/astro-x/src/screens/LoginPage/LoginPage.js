import React from 'react'
import Form from '../../components/Forms/Forms'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import SideColumn from '../../components/SideColumn/SideColumn'

const LoginPage = () => {
	const history = useHistory()
	const goToListTripPage = () => {
		history.push('/trips/listPrivate')
	}
	return(
			<Container>
				<SideColumn/>
				<ContentForms>
					<TitleContentTrips>Faça Login na sua Dashboard </TitleContentTrips>
					<Form/>
					<ButtonRight onClick={goToListTripPage}>Login</ButtonRight>
				</ContentForms>
			</Container>
		)
}
export default LoginPage