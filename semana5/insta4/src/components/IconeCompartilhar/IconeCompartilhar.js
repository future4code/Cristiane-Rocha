import React from 'react'
import './IconeCompartilhar.css'

export function IconeCompartilhar(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}