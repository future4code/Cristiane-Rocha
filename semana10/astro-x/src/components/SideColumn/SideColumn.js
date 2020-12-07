import React from 'react'
import {ContainerColumn,ContentColumn,ImageColumn,TitleColumn,TitleAstroX} from '../../assets/styles/Styles'

export default function SideColumn(){
	return(
		<ContainerColumn>
			<TitleAstroX>AstroX</TitleAstroX>
			<div>
				<TitleColumn>Parceiros</TitleColumn>
				<ImageColumn src="https://picsum.photos/300/300"/>
				<ImageColumn src="https://picsum.photos/300/300"/>
			</div>
		</ContainerColumn>
	)
}