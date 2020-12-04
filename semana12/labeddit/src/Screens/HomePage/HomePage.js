import React from 'react';
import {useHistory} from 'react-router-dom'
import {ButtonDefault} from '../../styled'
import {useInput} from '../../useHooks/useInput'
import {baseUrl} from '../../useHooks/baseUrl'
import axios from 'axios'
import {TextField , Button,Container} from '@material-ui/core';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import {myTheme} from '../../Assets/myTheme/myTheme'
import {InputStyle,ContainerHome,Con,TitlePageLogin,MyButton,TextCadastro,Logo,LogoImg} from './StyledHome'
import LogoLabeddit from '../../Assets/img/LabEdditLogo.png'
import ImageFeature from '../../Components/ImageFeature/ImageFeature'



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));



const HomePage = () => {

  const classes = useStyles();
  const history = useHistory()
	const [email,handdleEmail] = useInput()
	const [password,handdlePassword] = useInput()
	const urlBase = baseUrl()

	const openRegister = () => {
		history.push('/register')
	}
	const login = (event) => {
		console.log("aqui")
		const body = {
			email: email,
			password: password
		}
		axios.post(`${urlBase}/login`,body)
		.then((res) => {
			localStorage.setItem('token',res.data.token )
			localStorage.setItem('user',JSON.stringify(res.data) )
			history.push('/feed')
		})
		.catch((err) => {
			alert("Verifique os dados digitados !")
		})

		event.preventDefault()
	}

  return (
  	<ThemeProvider theme={myTheme}>
  		<ContainerHome>
  			<Con>
  			<Logo>
			<h1><LogoImg src={LogoLabeddit} alt="LabEddit"/></h1>
		</Logo>
  		<form className={classes.root} onSubmit={login}>
  			<TitlePageLogin>Entrar em sua conta </TitlePageLogin>
	      <div>
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
			  Entrar
		  </MyButton>
	    </form>
    	<TextCadastro>Ainda não tem uma conta ? <Button type="submit" onClick={openRegister} color="secondary">Cadastrar</Button></TextCadastro>
  		</Con>
  		<Con>
  			<ImageFeature/> 
  		</Con>
						
  		</ContainerHome>
  		
  		
  	</ThemeProvider>
    
  );
}
 export default HomePage