import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeCompartilhar} from '../IconeCompartilhar/IconeCompartilhar'
import {IconeSalvar} from '../IconeSalvar/IconeSalvar.js'
import {PopupCompartilhar} from '../PopupCompartilhar/PopupCompartilhar'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvar from '../../img/salvar.svg'
import iconeSalvo from '../../img/salvo.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    salvo: false,
    numeroCurtidas: 0,
    comentando: false,
    popup:false,
    numeroComentarios: 0
  }

 onClickCurtida = () => {
    console.log('Curtiu!')
      if(this.state.curtido === false){
        this.setState({
        curtido:true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
      }else{
        this.setState({
        curtido:false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
      }
    
  }
   onClickSalvar = () => {
      if(this.state.salvo === false){
        this.setState({
        salvo:true
      })
      }else{
        this.setState({
        salvo:false
      })
      }
    
  }
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

 onClickCompartilhar = () =>{
  if(!this.state.popup){
    this.setState({popup: true})
  }else{
    this.setState({popup: false})
  }
 }
 onClickWhats = () =>{
  console.log('Você compartilhou no Whatsapp !')
 }
 onClickInsta = () =>{
  console.log('Você compartilhou no Insatagram !')
 }
onClickTwitter = () =>{
  console.log('Você compartilhou no Twitter !')
 }


  render() {
    let iconeCurtida
    let iconeSalvarPost
    let displayPopup 

    if(this.state.popup){
      displayPopup = 'show-popup'
    }else{
      displayPopup = 'hidden-popup'
    }

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

     if(this.state.salvo) {
      iconeSalvarPost = iconeSalvo
    } else {
      iconeSalvarPost = iconeSalvar
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <div className={'icons'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeCompartilhar
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />
        </div>
        <div className={'icons'}>
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
          <IconeSalvar
            icone={iconeSalvarPost}
            onClickIcone={this.onClickSalvar}
          />
        </div>
      </div>
      <PopupCompartilhar
            onClickWhats={this.onClickWhats}
            onclickInsta={this.onclickInsta}
            onclickTwitter={this.onclickTwitter}
            display={displayPopup}
      />
      {componenteComentario}
    </div>
  }
}

export default Post