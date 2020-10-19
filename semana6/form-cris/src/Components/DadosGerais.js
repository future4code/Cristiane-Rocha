import React from 'react'
import styled from "styled-components"

const FormularioUm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const LabelForm = styled.label`
    display:block;
`;

export class DadosGerais extends React.Component {
    render(){
        return(
            <FormularioUm>
                    <h1>Etapa 1 - Dados Gerais</h1>
                    <div>
                        <LabelForm>1. Qual é seu nome? </LabelForm>
                        <input/>
                        <LabelForm>2. Qual é sua idade? </LabelForm>
                        <input/>
                        <LabelForm>3. Qual é seu email? </LabelForm>
                        <input/>
                        <LabelForm>4. Qual é seu nome? </LabelForm>
                        <select>
                            <option>Ensino médio Incompleto</option>
                            <option>Ensino médio Completo</option>
                            <option>Superior Incompleto</option>
                            <option>Superior Completo</option>
                        </select>
                    </div>
                </FormularioUm>
           
        )
    }
}