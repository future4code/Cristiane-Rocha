import React from 'react'
import {useHistory} from 'react-router-dom'
import {MenuItem,Menu} from '../../assets/styles/Styles'
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
				<MenuItem onClick={goBack}><IconBack/></MenuItem>
				<MenuItem onClick={goPageHome}><HomeSvg/></MenuItem>
			</Menu>
		)
}
export default Header