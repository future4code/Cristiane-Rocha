import React from 'react'
import './PopupCompartilhar.css'
import Whatsapp from '../../img/whatsapp.svg'
import Instagram from '../../img/instagram.svg'
import Twitter from '../../img/twitter.svg'

export function PopupCompartilhar(props){
	return <div className={props.display}>
		<img src={Whatsapp} onClick={props.onClickWhats}/>
		<img src={Instagram} onClick={props.onClickInsta}/>
		<img src={Twitter} onClick={props.onClickTwitter}/>
	</div>
}