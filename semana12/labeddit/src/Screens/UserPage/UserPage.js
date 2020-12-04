import react from 'react'

const UserPage = () => {
	const user = localStorage.getItem('user')
	const userData = JSON.parse(user)
	console.log(userData)
	return(
				<div>
					<h2>Seus Dados de Usuario</h2>
					<h1>Username: {userData.user.username}</h1>
					<p>Email: {userData.user.email}</p>
				</div>
				
		)
}
export default UserPage