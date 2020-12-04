import react from 'react'
import axios from 'axios'
import {baseUrl} from '../../useHooks/baseUrl'
import {ButtonVote} from './StyledVotes'
import { IoArrowUp,IoArrowDown } from "react-icons/io5";

const Votes = (props) => {
	const urlBase = baseUrl()
	const token = localStorage.getItem('token')

	
	const clickToVote = (id,value) => {
		const body = {
			direction: value
		}
		let url = urlBase + '/posts/' + id + '/vote'
		if(props.isComment){
			console.log('aqui')
			url = urlBase + '/posts/' + props.isComment + '/comment/' + id + '/vote'
		}
		axios.put(url,body,{
			headers:{
				Authorization:token
			}
		})
		.then((res) => { 
			console.log(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
	}
	return(
			<div>
				{props.curtir ? <ButtonVote onClick={() => clickToVote(props.id,1)}><IoArrowUp/></ButtonVote> : <ButtonVote onClick={() => clickToVote(props.id,-1)}><IoArrowDown/></ButtonVote>}
			</div>
		)
}
export default Votes