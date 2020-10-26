import React from 'react'
import styled from "styled-components"

const FormularioTres = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const LabelForm = styled.label`
    display:block;
`;
export class SemSuperior extends React.Component {
    render(){
        return(
            <FormularioTres>
                    <h1>Etapa 2 - Informações Gerais de Ensino</h1>
                    <div>
                        <LabelForm>5. Por que você não terminou um curso de graduação? </LabelForm>
                        <input/>
                        <LabelForm>6. Você fez algum curso complementar? </LabelForm>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso Tecnico</option>
                            <option>Curso de inglês</option>
                        </select>
                    </div>
                </FormularioTres>
           
        )
    }
}