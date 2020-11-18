import React,{useState} from 'react'
import FormCreateTrip from '../../components/Forms/FormCreateTrip'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import {useHistory} from 'react-router-dom'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import axios from 'axios'
import Header from '../../components/Header/Header'


const CreateTripPage = () => {
	const [name,setName] = useState('')
	const [planet,setPlanet] = useState('')
	const [date,setDate] = useState('')
	const [description,setDescription] = useState('')
	const [durationInDays,setDurationInDays] = useState('')


	const changeName = (event) => {
		setName(event.target.value)
	}
	const changePlanet = (event) => {
		setPlanet(event.target.value)
	}
	const changeDate = (event) => {
		setDate(event.target.value)
	}
	const changeDescription = (event) => {
		setDescription(event.target.value)
	}
	const changeDurationInDays = (event) => {
		setDurationInDays(event.target.value)
	}

	const history = useHistory()

	const createTrip = () => {
		const body = {
			name: name,
		    planet: planet,
		    date: date,
		    description: description,
		    durationInDays: durationInDays
		}
		const header = {
			headers: {
				auth: localStorage.getItem('token')
			}
		}
		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips',body,header)
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err.message)
		})
	}
	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Criar Viagem</TitleContentTrips>
					<FormCreateTrip
						changeName={changeName}
						changeDescription={changeDescription}
						changeDate={changeDate}
						changePlanet={changePlanet}
						changeDurationInDays={changeDurationInDays}
						name={name}
						planet={planet}
						date={date}
						description={description}
						durationInDays={durationInDays}
					/>
					<ButtonRight onClick={createTrip}>Login</ButtonRight>
				</ContentForms>
			</Container>
		)
}
export default CreateTripPage