import react from 'react'
import axios from 'axios'
import {useInput} from '../../useHooks/useInput'
import {baseUrl} from '../../useHooks/baseUrl'
import {useHistory} from 'react-router-dom'
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import {myTheme} from '../../Assets/myTheme/myTheme'
import {ContentRegister,Con,ContainerRegister,TitleRegister,InputStyle,MyButton} from './StyledRegister'
import Swal from 'sweetalert2'
import ImageFeature from '../../Components/ImageFeature/ImageFeature'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const RegisterPage = () => {
	 const classes = useStyles();
	const [username, handleUsername] = useInput();
  	const [email, handdleEmail] = useInput();
  	const [password, handdlePassword] = useInput();
  	const urlBase = baseUrl()
  	const history = useHistory()

	const register = (event) => {
		if((email === '') || (password === '') || (username === '')){
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Algo Saiu errado! Verifique se foi preenchido todos os campos!'
			})
		}else{
			const body = {
			email: email,
			password: password,
			username: username
		}
		axios.post(`${urlBase}/signup`,body)
		.then((res) => {
			localStorage.setItem('token',res.data.token )
			localStorage.setItem('user',JSON.stringify(res.data) )
			history.push('/feed')
		})
		.catch((err) => {
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Algo Saiu errado! O usuário que você esta tentando cadastrar já existe!'
			})
		})
		}
		

		event.preventDefault()
	}
	return(
			<ThemeProvider theme={myTheme}>
				<ContainerRegister>
					<Con>
						<form className={classes.root} onSubmit={register}>
					<TitleRegister>Registre-se</TitleRegister>
				      <div>
				      	<InputStyle
				          id="standard-text-input"
				          label="Usuario"
				          type="text"
				          autoComplete="current-text"
				          color="primary"
				          value={username} 
				          onChange={handleUsername}
				        />
				        <InputStyle
				          id="standard-email-input"
				          label="Email"
				          type="email"
				          autoComplete="current-email"
				          color="primary"
				          value={email} 
				          onChange={handdleEmail}
				        />
				        <InputStyle
				          id="standard-password-input"
				          label="Senha"
				          type="password"
				          autoComplete="current-password"
				          color="primary"
				          value={password} 
				          onChange={handdlePassword}
				        />
				      </div>
				      <MyButton type="submit" variant="contained" color="primary">
						  Cadastrar
					  </MyButton>
				    </form>
					</Con>
					<Con>
		  				<ImageFeature/> 
		  			</Con>
				</ContainerRegister>
				
			</ThemeProvider>
		)
}
export default RegisterPage