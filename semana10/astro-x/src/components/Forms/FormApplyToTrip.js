import React,{useState} from 'react'
import {Formulario,Label,Input,Textarea} from '../../assets/styles/Styles'

const FormCreateTrip = (props) => {
	
	return(
					<Formulario action="/action_page.php" method="get">
						<Label>Seu Nome: </Label>
						<Input value={props.name} onChange={props.changeName} type="text"/>
						<Label>Sua Idade: </Label>
						<Input value={props.age} onChange={props.changeAge} type="number"/>
						<Label>Profissão: </Label>
						<Input value={props.profession} onChange={props.changeProfession} type="text"/>
						<Label>País: </Label>
						<Input value={props.country} onChange={props.changeCountry} type="text"/>
						<Label>Descrição: </Label>
						<Textarea value={props.applicationText} onChange={props.changeApplicationText}></Textarea>
					</Formulario>
		)
}
export default FormCreateTrip