import React,{useState} from 'react'
import {Formulario,Label,Input} from '../../assets/styles/Styles'

const Forms = (props) => {
	
	return(
					<Formulario action="/action_page.php" method="get">
						<Label>Email: </Label>
						<Input value={props.email} onChange={props.inputEmail} type="email"/>
						<Label>Senha: </Label>
						<Input value={props.password} onChange={props.inputPassword} type="password"/>
					</Formulario>
		)
}
export default Forms