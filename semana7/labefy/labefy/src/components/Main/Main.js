import React from 'react';
import AddPlaylist from '../AddPlaylist/AddPlaylist'
import axios from 'axios'
import ListaDePlaylists from '../ListaDePlaylists/ListaDePlaylists'
import AddTracks from '../AddTracks/AddTracks'
import DetalhesMusica from '../DetalhesMusica/DetalhesMusica'
import AppBar from '../AppBar/AppBar'




const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const apiConfig = {
  headers:{
    Authorization:'cristiane-rocha-dumont',
  }
}
class Main extends React.Component{
  state = {
    playlistCriada: '',
    playlistsCriadas:[],
    adcionaTracks:false,
    nomeMusica:'',
    artistaMusica:'',
    urlMusica:'',
    musicaSalva:'',
    idMusica:'',
    detalhesDaMusica:[],
    openAddPlaylist:false,
    openViewPlaylist:false,
    openAddPlaylists:true
  }

  //onChange cria playlist
  onChangeCriaPlaylist = (event) => {
    this.setState({playlistCriada:event.target.value})
  }

  //Adciona Playlist
  addPlaylist = () => {
    let body = {
      name: this.state.playlistCriada
    }
    axios.post(urlApi,body,apiConfig).then((resposta) => {
      console.log(resposta.data)
      this.setState({openAddPlaylists:false,playlistCriada:''})
    }).catch((error) => {
      console.log(error)
    })
  }

  //Exibe Playlists
  componentDidMount = () => {
    axios.get(urlApi,apiConfig).then((resposta) => {
      console.log(resposta.data)
      this.setState({playlistsCriadas:resposta.data.result.list})
    }).catch((error) => {
      console.log(error)
    })
  }

  //Deleta Playlist
  deletePlaylist = (id) => {
    if(window.confirm("Tem certeza que deseja apagar esta playlist? ")){
       axios.delete (`${urlApi}/${id}`,{
        headers:{
          Authorization:'cristiane-rocha-dumont',
          playlistId:id
        }
      }).then((resposta) => {
        console.log(resposta.data)
        
      }).catch((error) => {
        console.log(error)
      })
    }
     
  }

    //Abrir detalhes de cada playlist
    detalhesPlaylist = (id) => {
      axios.get (`${urlApi}/${id}/tracks`,{
        headers:{
          Authorization:'cristiane-rocha-dumont',
          playlistId:id
        }
      }).then((resposta) => {
        this.setState({detalhesDaMusica:resposta.data.result.tracks})  
        console.log(resposta.data.result.tracks)   
        this.setState({idMusica:id})
      }).catch((error) => {
        console.log(error)
      })
      console.log(this.state.detalhesDaMusica)
    }

  //Atualiza Playlist apos alterações
  componentDidUpdate = (id) => {
     axios.get(urlApi,apiConfig).then((resposta) => {
        this.setState({playlistsCriadas:resposta.data.result.list,detalhesDaMusica:this.state.detalhesDaMusica})
      }).catch((error) => {
        console.log(error)
      })
    }

    //Adcionar musica a uma playlist
    addMusicasPlaylist = (id) => {

        this.setState({
                        adcionaTracks:!this.state.adcionaTracks,
                        idMusica:id
                      })
      }

    //Onchange inputs adciona Musica
      alteraNome = (event) => {
        this.setState({nomeMusica:event.target.value})
      }
      alteraArtista = (event) => {
        this.setState({artistaMusica:event.target.value})
      }
      alteraUrl = (event) => {
        this.setState({urlMusica:event.target.value})
      }

    //Salva Musica
    salvaMusica = () => {
      const body = {
                      name: this.state.nomeMusica, 
                      artist: this.state.artistaMusica,
                      url: this.state.urlMusica
                    }
       axios.post (`${urlApi}/${this.state.idMusica}/tracks`,body,{
        headers:{
            Authorization:'cristiane-rocha-dumont',
            playlistId:this.state.idMusica
          }
        }).then((resposta) => {
          alert('Musica Salva com sucesso !')
          this.setState({adcionaTracks:false})
          console.log(resposta.data)
          
        }).catch((error) => {
          console.log(error)
        })
    }

    deletarMusica = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idMusica}/tracks/${id}`,{
          headers:{
            Authorization:'cristiane-rocha-dumont',
              trackId:id,
              playlistId:this.state.idMusica,
          }  
        }).then((resposta) => {
          this.setState({detalhesDaMusica:this.state.detalhesDaMusica})
          console.log(resposta.data)
        }).catch((error) => {
          console.log(error)
          console.log(this.state.idMusica)
        })
     }


     //Abrir Paginas
     openAddPlaylist = () => {
      this.setState({openAddPlaylist:true,openViewPlaylist:false})
     }
     openViewPlaylist = () => {
      console.log("Aqui")
      this.setState({openViewPlaylist:true,openAddPlaylist:false})
     }

     //Adcionar mais Playlist
     addMais = () => {
      this.setState({openAddPlaylists:true})
     }
  render(){
    let addPlays = ''
    let viewPlays = ''

    if(this.state.openAddPlaylist === true){
      addPlays = <AddPlaylist 
                  playlistCriada={this.state.playlistCriada}
                  onChangeCriaPlaylist={this.onChangeCriaPlaylist}
                  addPlaylist={this.addPlaylist}
                  openAddPlaylists={this.state.openAddPlaylists}
                  openViewPlaylist={this.openViewPlaylist}
                  addMais={this.addMais}
                />
    }
    if(this.state.openViewPlaylist === true){
      viewPlays = <ListaDePlaylists
                  exibePlaylists={this.state.playlistsCriadas}
                  deletePlaylist={this.deletePlaylist}
                  detalhesPlaylist={this.detalhesPlaylist}
                  addMusicasPlaylist={this.addMusicasPlaylist}
                  
                />

    }
    return (
              <div>
               <AppBar
                openViewPlaylist={this.openViewPlaylist}
                openAddPlaylist={this.openAddPlaylist}
               />
                
               {addPlays}
                <DetalhesMusica
                    nome={this.state.detalhesDaMusica.name}
                    artista={this.state.detalhesDaMusica.artist}
                    url={this.state.detalhesDaMusica.url}
                    detalhesDaMusica={this.state.detalhesDaMusica}
                    playlistsCriadas={this.state.playlistsCriadas}
                    deletarMusica={this.deletarMusica}
                />
                <AddTracks
                  adcionaTracks={this.state.adcionaTracks}
                  alteraNome={this.alteraNome}
                  alteraArtista={this.alteraArtista}
                  alteraUrl={this.alteraUrl}
                  salvaMusica={this.salvaMusica}
                />
              {viewPlays}  
              
              </div>
           );
  }
  
}

export default Main;