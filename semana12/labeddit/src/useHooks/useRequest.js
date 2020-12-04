import react,{useState} from 'react'
import axios from 'axios'

export const useRequest = (url) => {
	const token = localStorage.getItem('token')
	const [data,setData] = useState({})
	axios(url,{
		headers:{
			Authorization:token
		}
	})
	.then((res) => {
		setData(res.data)
	})
	.catch((err) => {
		console.log(err)
	})
	return data
}
