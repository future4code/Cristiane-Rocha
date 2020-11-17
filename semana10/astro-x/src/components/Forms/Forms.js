import React from 'react'
import {Formulario,Label,Input} from '../../assets/styles/Styles'

const Forms = () => {
	return(
					<Formulario action="/action_page.php" method="get">
						<Label>Email: </Label>
						<Input type="email"/>
						<Label>Senha: </Label>
						<Input type="password"/>
					</Formulario>
		)
}
export default Forms