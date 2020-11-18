import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage'
import HomePage from '../screens/HomePage/HomePage'
import LoginPage from '../screens/LoginPage/LoginPage'
import ListTripsPrivatePage from '../screens/ListTripsPrivatePage/ListTripPrivatePage'
import TripDetailsPrivatePage from '../screens/TripDetailsPrivatePage/TripDetailsPrivatePage'
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage'
import ApplyToTripPage from '../screens/ApplyToTripPage/ApplyToTripPage'

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
						<CreateTripPage/>
					</Route>
					<Route exact path="/trips/detailsPrivate/:id">
						<TripDetailsPrivatePage/>
					</Route>
					<Route exact path="/trips/createTripPage">
						<div>Criar Viagem </div>
					</Route>
					<Route exact path="/trips/apllyToTrip/:id/:name">
						<ApplyToTripPage/>
					</Route>
					<Route>
						<div>Erro 404.</div>
					</Route>
				</Switch>
			</BrowserRouter>
		)
}
export default Router