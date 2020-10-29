import React from 'react'
import Styled from 'styled-components'
import {DivDetalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {H3Detalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {DetalhesItem} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {PDetalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {InputDetalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {SpanDetalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {ButtonDetalhesSair} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {ButtonDetalhesDelete} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {ButtonsDetalhes} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {ButtonsEditarSalvar} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {SpanEditar} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {BotaoSalvar} from '../Usuarios/Estilos/StyleDetalhesUsuario'
import {BotaoCancelar} from '../Usuarios/Estilos/StyleDetalhesUsuario'


class DetalheUsuario extends React.Component{
	render(){
		let botaoEditarSalvar = ''
		let nomeUsuario = ''
		let emailUsuario = ''
		let cancelarEditar = ''
		if(this.props.usuarioEditar === false){
			botaoEditarSalvar = <BotaoSalvar onClick={this.props.editarUsuario}> Editar </BotaoSalvar>
			nomeUsuario = <SpanDetalhes>{this.props.nomeDoUsuario}</SpanDetalhes> 
			emailUsuario = <SpanDetalhes>{this.props.emailDoUsuario}</SpanDetalhes>
		}else{
			botaoEditarSalvar = <BotaoSalvar onClick={this.props.salvarUsuario}> Salvar </BotaoSalvar>
			cancelarEditar = <BotaoCancelar onClick={this.props.cancelarEditar}> Cancelar </BotaoCancelar>
			nomeUsuario = <InputDetalhes 
								value={this.props.nomeDoUsuario}
								onChange={this.props.mudarNome}
						  />
			emailUsuario = <InputDetalhes 
								value={this.props.emailDoUsuario}
								onChange={this.props.mudarEmail}
							/>
		}
		return(
			<DivDetalhes>
				<H3Detalhes>Detalhes do Usuário </H3Detalhes>
				<PDetalhes>
					 <DetalhesItem>Nome: </DetalhesItem> 
					 {nomeUsuario}
				</PDetalhes>
				<PDetalhes>
					 <DetalhesItem>Email: </DetalhesItem> 
					 {emailUsuario}
				</PDetalhes>
				<ButtonsEditarSalvar>
					{cancelarEditar}
					{botaoEditarSalvar}
				</ButtonsEditarSalvar>
				<ButtonsDetalhes>
					<ButtonDetalhesDelete onClick={this.props.botaoDeletar}>Deletar Usuário </ButtonDetalhesDelete>
					<ButtonDetalhesSair onClick={this.props.fecharDetalhes}> Voltar </ButtonDetalhesSair>
				</ButtonsDetalhes>
			</DivDetalhes>
		)
	}
}
export default DetalheUsuario