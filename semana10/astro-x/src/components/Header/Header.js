import React from 'react'
import {useHistory} from 'react-router-dom'
import {MenuItem,Menu,MenuDiv} from '../../assets/styles/Styles'
import HomeSvg from '../../assets/img/HomeSvg'
import IconBack from '../../assets/img/IconBack'

const Header = () => {
	const history = useHistory()
	const goPageHome = () => {
		history.push('/')
	}
	const goBack = () => {
		history.goBack() 
	}
	return (
			<Menu>
				<MenuDiv><MenuItem onClick={goBack}><IconBack/></MenuItem></MenuDiv>
				<MenuDiv><MenuItem onClick={goPageHome}><HomeSvg/></MenuItem></MenuDiv>
			</Menu>
		)
}
export default Header