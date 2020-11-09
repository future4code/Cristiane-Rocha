import React from 'react'
import {TitleAdd,DivAdd,InputAdd,InputsDiv,DivAviso} from './StyleAdd'
import {Button} from '@material-ui/core'

class AddPlaylist extends React.Component{
	render(){
		    let addPlay = ''
		    if(this.props.openAddPlaylists === true){
		    	addPlay = <InputsDiv>
								<InputAdd placeholder='Digite o nome da sua playlist' value={this.props.playlistCriada} onChange={this.props.onChangeCriaPlaylist}/>
								<Button color='primary' variant='contained'  onClick={this.props.addPlaylist}>Salvar</Button>
							</InputsDiv>

		    }else{
		    	addPlay = <DivAviso>
		    				<h3>Playlist salva com sucesso !</h3>
		    				<Button color='primary' variant='contained' onClick={this.props.addMais}>Adcionar Mais </Button>
		    				</DivAviso>
		    }
		return(
			<DivAdd>
				<TitleAdd>Adcione Playlists a sua conta </TitleAdd>
				{addPlay}
			</DivAdd>
		)
	}
}
export default AddPlaylist