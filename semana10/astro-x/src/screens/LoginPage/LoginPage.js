import React,{useState} from 'react'
import Form from '../../components/Forms/Forms'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import axios from 'axios'
import Header from '../../components/Header/Header'

const LoginPage = () => {
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')

	const history = useHistory()

	const inputEmail = (event) => {
		setEmail(event.target.value)
	}

	const inputPassword = (event) => {
		setPassword(event.target.value)
	}

	const getListTripPrivatePage = () => {
		const body = {
			email:email,
			password:password
		}
		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/login',body)
		.then((res) => {
			localStorage.setItem('token', res.data.token)
			history.push('/trips/listPrivate')
		}).catch((err) => {
			alert('Dados digitados errados, ou você não esta cadastrado, entre em contato com o suporte!')
			setEmail('')
			setPassword('')
		})
	}
	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Faça Login na sua Dashboard </TitleContentTrips>
					<Form
						inputEmail={inputEmail}
						inputPassword={inputPassword}
						email={email}
						password={password}
					/>
					<ButtonRight onClick={getListTripPrivatePage}>Login</ButtonRight>
				</ContentForms>
			</Container>
		)
}
export default LoginPage