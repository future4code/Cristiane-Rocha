import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage'
import HomePage from '../screens/HomePage/HomePage'
import LoginPage from '../screens/LoginPage/LoginPage'
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage'
import ListTripsPrivatePage from '../screens/ListTripsPrivatePage/ListTripPrivatePage'
import TripDetailsPrivatePage from '../screens/TripDetailsPrivatePage/TripDetailsPrivatePage'

const Router = () => {

	return(

			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<HomePage/>
					</Route>
					<Route exact path="/trips/list">
						<ListTripsPage/>
					</Route>
					<Route exact path="/trips/listPrivate">
						<ListTripsPrivatePage/>
					</Route>
					<Route exact path="/application-form">
						<div>Inscrever-se</div>
					</Route>
					<Route exact path="/login">
						<LoginPage/>
					</Route>
					<Route exact path="/trips/create">
						<div>Criar Viagens</div>
					</Route>
					<Route exact path="/trips/details/:id">
						<TripDetailsPage/>
					</Route>
					<Route exact path="/trips/detailsPrivate/:id">
						<TripDetailsPrivatePage/>
					</Route>
					
					<Route>
						<div>Erro 404.</div>
					</Route>
				</Switch>
			</BrowserRouter>
		)
}
export default Router