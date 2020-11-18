import axios from 'axios'
import React,{useState} from 'react'

export const useRequestApi = (url) => {
  const [trips,setTrips] = useState([])
  axios.get(url).then((res) => { 
    setTrips(res.data.trips)
  }).catch((err) => { 
    console.log(err)
  })
  return trips
}

export const useRequestApiWidthHeaders = (url) => {

  const [tripsDetails,setTripsDetails] = useState({})
  const [tripCandidates,setTripCandidates] = useState('')
  axios.get(url,{
  	headers:{
  		auth:localStorage.getItem('token')
  	}
  }).then((res) => { 
    setTripsDetails(res.data.trip)
  }).catch((err) => { 
    console.log(err)
  })
  return tripsDetails

}


