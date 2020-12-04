import react,{useEffect} from 'react'
import Feed from '../../Components/Feed/Feed'
import ImageFeature from '../../Components/ImageFeature/ImageFeature'
import {ContainerHome} from './StyledFeedPage'


const FeedPage = () => {
	const token = localStorage.getItem('token')


	return(
			<ContainerHome>
				<div>
					{token ? 
					<Feed/>
					:
					<h1>Você não está logado</h1>
					
				}
				</div>
			</ContainerHome>
		)
}
export default FeedPage