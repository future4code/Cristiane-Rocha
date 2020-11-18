import React,{useState} from 'react'
import FormApplyToTrip from '../../components/Forms/FormApplyToTrip'
import {Container,ButtonRight,ContentForms,TitleContentTrips} from '../../assets/styles/Styles'
import {useHistory,useParams} from 'react-router-dom'
import SideColumnPrivate from '../../components/SideColumn/SideColumnPrivate'
import axios from 'axios'
import Header from '../../components/Header/Header'


const CreateTripPage = () => {
	const pathParams = useParams()
	const history = useHistory()

	const [name,setName] = useState('')
	const [age,setAge] = useState('')
	const [applicationText,setApplicationText] = useState('')
	const [profession,setProfession] = useState('')
	const [country,setCountry] = useState('')


	const changeName = (event) => {
		setName(event.target.value)
	}
	const changeAge = (event) => {
		setAge(event.target.value)
	}
	const changeProfession = (event) => {
		setProfession(event.target.value)
	}
	const changeApplicationText = (event) => {
		setApplicationText(event.target.value)
	}
	const changeCountry = (event) => {
		setCountry(event.target.value)
	}

	const applyToTrip = () => {
		const body = {
					    name: name,
					    age: age,
					    applicationText: applicationText,
					    profession: profession,
					    country: country
					}

		axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips/${pathParams.id}/apply`,body)
		.then((res) => {
			alert("Você foi inscrito, aguarde aprovação !")
		})
		.catch((err) => {
			console.log(err)
		})
	}

	return(
			<Container>
				<SideColumnPrivate/>
				<Header/>
				<ContentForms>
					<TitleContentTrips>Inscrever-se para a viagem: <span>{pathParams.name}</span></TitleContentTrips>
					<FormApplyToTrip
						changeCountry={changeCountry}
						changeApplicationText={changeApplicationText}
						changeProfession={changeProfession}
						changeAge={changeAge}
						changeName={changeName}
						name={name}
						age={age}
						profession={profession}
						applicationText={applicationText}
						country={country}
					/>
					<ButtonRight onClick={applyToTrip}>Inscrever-se</ButtonRight>
				</ContentForms>
			</Container>
		)
}
export default CreateTripPage