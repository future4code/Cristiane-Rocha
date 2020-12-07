import React,{useState} from 'react'
import {Formulario,ButtonRight,Label,Input,Textarea} from '../../assets/styles/Styles'
import {useForm} from '../hooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const FormCreateTrip = (props) => {
	const [form,onChange] = useForm({name:'',planet:'',date:'',durationInDays:'',description:''})
	const history = useHistory()

		const createTrip = (event) => {
			const body = {
				name: form.name,
			    planet: form.planet,
			    date: form.date,
			    description: form.description,
			    durationInDays: form.durationInDays
			}
			const header = {
				headers: {
					auth: localStorage.getItem('token')
				}
			}
			axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/trips',body,header)
			.then((res) => {
				alert("Viagem Criada com sucesso !")
				history.push('/trips/listPrivate')
			})
			.catch((err) => {
				console.log(err.message)
			})
			event.preventDefault()
		}

	return(
					<Formulario onSubmit={createTrip}>
						<Label>Nome: </Label>
						<Input value={form.name} name={'name'} onChange={onChange} type="text"/>
						<Label>Destino: </Label>
						<Input value={form.planet} name={'planet'} onChange={onChange} type="text"/>
						<Label>Data: </Label>
						<Input value={form.date} name={'date'} onChange={onChange} type="date"/>
						<Label>Duração em dias: </Label>
						<Input value={form.durationInDays} name={'durationInDays'} onChange={onChange} type="number"/>
						<Label>Descrição: </Label>
						<Textarea value={form.description} name={'description'} onChange={onChange}></Textarea>
						<ButtonRight>Criar</ButtonRight>
					</Formulario>
		)
}
export default FormCreateTrip