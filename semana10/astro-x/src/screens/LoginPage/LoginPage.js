import React,{useState} from 'react'
import Form from '../../components/Forms/Forms'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import Header from '../../components/Header/Header'

const LoginPage = () => {
	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Faça Login na sua Dashboard </TitleContentTrips>
					<Form/>
				</ContentForms>
			</Container>
		)
}
export default LoginPage