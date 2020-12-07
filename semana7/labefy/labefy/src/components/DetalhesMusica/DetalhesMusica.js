import React from 'react'
import axios from 'axios'

class DetalhesMusica extends React.Component{
	render(){
		let ListaDeMusicas = this.props.detalhesDaMusica.map((track,index,array) => {
			return(
				<div key={track.id}>
					<div>
						<p>{track.name}</p>
						<p>{track.artist}</p>
						<audio controls>
						  <source src={track.url} type="audio/mpeg"/>
						</audio>
					</div>
					<div>
						<button onClick={() => this.props.deletarMusica(track.id)} >Deletar </button>
					</div>
			</div>
			)
		})
		return(
			<div>
			{ListaDeMusicas}
			</div>
		)
	}
}
export default DetalhesMusica