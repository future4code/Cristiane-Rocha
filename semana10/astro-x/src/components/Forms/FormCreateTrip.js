import React,{useState} from 'react'
import {Formulario,Label,Input,Textarea} from '../../assets/styles/Styles'

const FormCreateTrip = (props) => {
	
	return(
					<Formulario action="/action_page.php" method="get">
						<Label>Nome da Viagem: </Label>
						<Input value={props.name} onChange={props.changeName} type="text"/>
						<Label>Destino: </Label>
						<Input value={props.planet} onChange={props.changePlanet} type="text"/>
						<Label>Data: </Label>
						<Input value={props.date} onChange={props.changeDate} type="date"/>
						<Label>Duração em dias: </Label>
						<Input value={props.durationInDays} onChange={props.changeDurationInDays} type="number"/>
						<Label>Descrição: </Label>
						<Textarea value={props.description} onChange={props.changeDescription}></Textarea>
					</Formulario>
		)
}
export default FormCreateTrip