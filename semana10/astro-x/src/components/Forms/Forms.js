import React,{useState} from 'react'
import {Formulario,Label,Input,ButtonRight} from '../../assets/styles/Styles'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useForm} from '../hooks/useForm'


const Forms = (props) => {
	const [form,onChange] = useForm({password:'',email:''})
	const history = useHistory()

	const handleSubmit = (event) => {
		const body = {
						"email": form.email,
						"password": form.password
					}
		
		  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/cristiane-rocha/login`,body).then((res) => { 
		  	localStorage.setItem('token',res.data.token)
		    history.push('/trips/listPrivate')
		  }).catch((err) => { 
		    console.log(err)
		  })
		event.preventDefault();
	}
	return(
					<Formulario onSubmit={handleSubmit}>
						<Label>Email: </Label>
						<Input onChange={onChange} value={form.email} name={"email"} type="email"/>
						<Label>Senha: </Label>
						<Input onChange={onChange} value={form.password} name={"password"}  type="password"/>
						<ButtonRight>Login</ButtonRight>
					</Formulario>
		)
}
export default Forms