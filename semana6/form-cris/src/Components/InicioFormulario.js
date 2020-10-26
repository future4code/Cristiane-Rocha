import React from 'react'
import styled from "styled-components"
import {DadosGerais} from './DadosGerais'
import {ComSuperior} from './ComSuperior'
import {SemSuperior} from './SemSuperior'
import {FimFormulario} from './FimFormulario'

let tiraBotao = false
const ButtonProxima = styled.button`   
display:${props => {
        if(props.show){
            return "block"
        }else{
            return "none"
        }
    }};
    margin: 20px auto;
`;
export class InicioFormulario extends React.Component{
    state = {
        paginaAtual: 0,
        showButton: true
    }
    proximaPagina = () => {
            this.setState({paginaAtual: this.state.paginaAtual  + 1})  
        if(this.state.paginaAtual === 2){
            this.setState({showButton:false})
        }
    }
    render() {
    let inicia = () => {
            if(this.state.paginaAtual === 0){
                return (
                <DadosGerais/>
                )
            }else if(this.state.paginaAtual === 1){
                return (
                    <ComSuperior/>
                )
            }else if(this.state.paginaAtual === 2){
                return(
                    <SemSuperior/>
                )
            }else if(this.state.paginaAtual === 3){
                return(
                    <FimFormulario/>
                )
            }
           
        }
        return(
			<div>
                {inicia()}
                <ButtonProxima show={this.state.showButton} onClick={this.proximaPagina}>Próxima Etapa</ButtonProxima>
            </div>
		)
    }
	
}