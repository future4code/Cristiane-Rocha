import react from 'react'
import {useHistory} from 'react-router-dom'
import {HeaderStyle,ImgLogo,ButtonBack,ButtonUsernameAndLogout,ButtonUsername,TitleApp,ButtonLogout} from './StyledHeader'
import { IoReturnUpBackOutline,IoPersonOutline,IoExitOutline } from "react-icons/io5";
import LogoLabeddit from '../../Assets/img/labEdditLogo2.png'

const Header = () => {
  const history = useHistory()
  const clickToBack = () => {
    history.goBack()
  }
  const userData = localStorage.getItem('user')
  const userJason = JSON.parse(userData)
  const clickToLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    history.push('/login')
  }
  const goToHomePage = () => {
    history.push('/')
  }
  const goToUserPage = () => {
    history.push('/user')
  }
  
  return(
      <HeaderStyle>
        <ButtonUsernameAndLogout>
           <ButtonBack onClick={clickToBack}><IoReturnUpBackOutline/></ButtonBack>
           <TitleApp onClick={goToHomePage}><ImgLogo src={LogoLabeddit} alt="LabEddit"/></TitleApp>
        </ButtonUsernameAndLogout>

        {userData ? 

          <ButtonUsernameAndLogout >
          <ButtonUsername onClick={goToUserPage}><IoPersonOutline/> <span>@{userJason.user.username}</span></ButtonUsername>
          <ButtonLogout onClick={clickToLogout}><IoExitOutline/></ButtonLogout>
          </ButtonUsernameAndLogout>
          :
          <div></div>
        }
        
      </HeaderStyle>
    )
}
export default Header