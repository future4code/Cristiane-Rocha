import React from 'react'
import styled from "styled-components"

const FimForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export class FimFormulario extends React.Component {
    render(){
        return(
            <FimForm>
                    <h1>O formulário Acabou!</h1>
                    <p>Muito obrigado por participar! Entraremos em contato</p>
                </FimForm>
           
        )
    }
}