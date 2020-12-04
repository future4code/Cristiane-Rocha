import react from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import HomePage from '../Screens/HomePage/HomePage'
import RegisterPage from '../Screens/RegisterPage/RegisterPage'
import FeedPage from '../Screens/FeedPage/FeedPage'
import PostDetailPage from '../Screens/PostDetailPage/PostDetailPage'
import Header from '../Components/Header/Header'
import UserPage from '../Screens/UserPage/UserPage'


const Routers = () => {
	const token = localStorage.getItem('token')
	return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						{token ? <Header/> : '' }						
						{token ? <FeedPage/> : <HomePage/> }
					</Route>
					<Route exact path="/login">					
						<HomePage/>
					</Route>
					<Route exact path="/register">
						<Header/>
						<RegisterPage/>
					</Route>
					<Route exact path="/feed">
						<Header/>
						<FeedPage/>
					</Route>
					<Route exact path="/postdetail/:id">
						<Header/>
						<PostDetailPage/>
					</Route>
					<Route exact path="/user">
						<Header/>
						<UserPage/>
					</Route>
				</Switch>
			</BrowserRouter>
		)
}
export default Routers