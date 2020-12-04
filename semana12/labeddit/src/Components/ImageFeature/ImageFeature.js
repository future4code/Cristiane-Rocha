import react from 'react'
import Destaque from '../../Assets/img/destaque.jpg'
import styled from 'styled-components'

const BoxImage = styled.div`
	overflow:hidden;
	width:90%;
	height:80vh;
	display:flex;
	justify-content:center;
	align-items:center;
	box-shadow:2px 2px 5px #ddd;
	border-radius:5px;
`;
const Image = styled.img`
	display:block;
	width:100%;
	height:auto;
`;
const ImageFeature = () => {
	return(
		<BoxImage>
			<Image src={Destaque} alt="Imagem de Destaque"/>
		</BoxImage>
		
		)
}
export default ImageFeature