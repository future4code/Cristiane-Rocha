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

  const [TripsDetails,setTripsDetails] = useState([])
  axios.get(url,{
  	headers:{
  		auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRQeEJSU0Y3cjQ4eWN4b0hIQllOIiwiZW1haWwiOiJjcmlzZmFicmljaW8wMTA0QGdtYWlsLmNvbSIsImlhdCI6MTYwNTYzOTQ1MH0.emRX_CvGZdx01HpwIRaLe-3HtClsBS1ivAlsFLYFx3M'
  	}
  }).then((res) => { 
    setTripsDetails(res.data.trip)
  }).catch((err) => { 
    console.log(err)
  })
  return TripsDetails

}