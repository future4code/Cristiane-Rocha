import React from 'react'
import {Button,ThemeProvider,createMuiTheme} from '@material-ui/core';
import {ItemLista,TitlePlaylist,PlayLists,TitleList,Buttons} from './StyleLista'

class ListaDePlaylists extends React.Component{
	render(){
		let playlistsExibida = this.props.exibePlaylists.map((playlist) => {
			return (
					<ItemLista key={playlist.id}>
						<TitlePlaylist>{playlist.name}</TitlePlaylist> 
						<Buttons> 
							<Button variant='contained' color='primary' onClick={() => this.props.deletePlaylist(playlist.id)}> Apagar </Button> 
							<Button  variant='contained' color='secondary' onClick={() => this.props.detalhesPlaylist(playlist.id)}> Ver </Button> 							
							<Button variant='contained' onClick={() => this.props.addMusicasPlaylist(playlist.id)}> Add </Button>
						</Buttons>
					</ItemLista>
					)
		})
		return(
			<ThemeProvider theme={this.theme}>
			<TitleList>Ouça as Sua PlayLists </TitleList>
			<PlayLists>
				{playlistsExibida}
			</PlayLists>
			</ThemeProvider>

		)
	}
}

export default ListaDePlaylists