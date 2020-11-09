import React from 'react'

class AddTracks extends React.Component{
	render(){
		let exibeAddMusica = ''
		if(this.props.adcionaTracks === true){
			exibeAddMusica = <div><input onChange={this.props.alteraNome} value={this.props.nomeMusica} placeholder="Nome da Musica"/><input onChange={this.props.alteraArtista} value={this.props.artistaMusica} placeholder="Nome do Artista ou Banda"/><input onChange={this.props.alteraUrl} value={this.props.urlMusica} placeholder="URL da Musica"/><button onClick={this.props.salvaMusica}>Salvar</button></div>
		}
		return(
			<div>
				{exibeAddMusica}
			</div>
		)
	}
}

export default AddTracks