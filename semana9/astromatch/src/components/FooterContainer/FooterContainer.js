import React from 'react'
import Styled from 'styled-components'
import Heart from '../../img/heart.svg'
import Close from '../../img/close.svg'


const Footer = Styled.footer`
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
   box-shadow:2px -2px 5px #ccc;
   height:80px;
   background: linear-gradient(90deg, rgba(108,72,157,1) 0%, rgba(136,94,193,1) 51%, rgba(161,121,216,1) 100%);
`;
const Image = Styled.img`
  width:40px;
  height:40px;
  display:block;
`;
const DivImg = Styled.div`
  width:60px;
  height:60px;
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:2px solid #ef436e;
  cursor:pointer;
  background: #fff;
`;
const DivImg2 = Styled.div`
  width:60px;
  height:60px;
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:2px solid #3f3f3f;
  cursor:pointer;
  background: #fff;
`;

function FooterContainer(props){

 
  return(
      <Footer>
      <DivImg>
        <Image src={Heart} onClick={() => props.escolhePessoa(props.pessoaId)}/>
      </DivImg>
      <DivImg2 onClick={props.mostraPessoa}>
        <Image src={Close}/>
      </DivImg2>
      </Footer>

    )
}

export function FooterMach(){
  return(
      <Footer>
        <p>Todos os direitos reservados </p>
      </Footer>
    )
}
export default FooterContainer