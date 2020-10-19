import React from 'react'
import styled from "styled-components"

const FormularioDois = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const LabelForm = styled.label`
    display:block;
`;
export class ComSuperior extends React.Component {
    render(){
        return(
            <FormularioDois>
                    <h1>Etapa 2 - Informações do ensino Superior</h1>
                    <div>
                        <LabelForm>Qual é curso? </LabelForm>
                        <input/>
                        <LabelForm>Qual unidade de ensino? </LabelForm>
                        <input/>
                    </div>
                </FormularioDois>
           
        )
    }
}