import React from 'react'
import SideColumn from '../../components/SideColumn/SideColumnPrivate'
import {Container,ContentHome,Content,Button} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'

const HomePage = () => {
	const history = useHistory()
	const goToLoginPage = () => {
		history.push('/login')
	}
	const goToListTrip = () => {
		history.push('/trips/list')
	}
	return(
		<Container>
			<SideColumn/>
			<ContentHome>
				<Content>
					<Button onClick={goToLoginPage}>Login</Button>
					<Button onClick={goToListTrip}>Viajar</Button>
				</Content>
			</ContentHome>
		</Container>
	)

}
export default HomePage