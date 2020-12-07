import React,{useState} from 'react'
import {Formulario,Label,Input,Textarea,ButtonRight} from '../../assets/styles/Styles'
import {useForm} from '../hooks/useForm'
import {useHistory,useParams} from 'react-router-dom'
import axios from 'axios'

const FormCreateTrip = (props) => {
	const history = useHistory()
	const pathParams = useParams()
	const [form,onChange] = useForm({name:'',age:'', profession: '', country: '',applicationText:'' })

		const applyToTrip = (event) => {
		const body = {
					    name: form.name,
					    age: form.age,
					    applicationText: form.applicationText,
					    profession: form.profession,
					    country: form.country
					}

		axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips/${pathParams.id}/apply`,body)
		.then((res) => {
			alert("Você foi inscrito, aguarde aprovação !")
			history.push('/trips/list')
		})
		.catch((err) => {
			console.log(err)
		})
		event.preventDefault();
	}

	return(
					<Formulario onSubmit={applyToTrip}>
						<Label>Seu Nome: </Label>
						<Input name={"name"} value={form.name} onChange={onChange} type="text"/>
						<Label>Sua Idade: </Label>
						<Input name={"age"} value={form.age} onChange={onChange} type="number"/>
						<Label>Profissão: </Label>
						<Input name={"profession"} value={form.profession} onChange={onChange} type="text"/>
						<Label>País: </Label>
						<Input name={"country"} value={form.country} onChange={onChange} type="text"/>
						<Label>Porque você merece ir? </Label>
						<Textarea name={"applicationText"} value={form.applicationText} onChange={onChange}></Textarea>
						<ButtonRight>Inscrever-se</ButtonRight>
					</Formulario>
		)
}
export default FormCreateTrip