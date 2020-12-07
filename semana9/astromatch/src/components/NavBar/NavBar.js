import React from 'react'
import Styled from 'styled-components'
import Back from '../../img/undo.svg'
import Persons from '../../img/persons.svg'
import Delete from '../../img/delete.svg'


const Header = Styled.header`
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  box-shadow:2px 2px 5px #ccc;
  background: linear-gradient(90deg, rgba(108,72,157,1) 0%, rgba(136,94,193,1) 51%, rgba(161,121,216,1) 100%);
`;
const Image = Styled.img`
  width:25px;
  height:25px;
  cursor:pointer;
`;
const Title = Styled.h1`
  color:#fff;
`;

function NavBar(props){
  let iconMatchs = <Image src={Persons} onClick={props.exibeMatch}/>
  let iconBack = <div></div>
  if(props.showMatch === true){
    iconBack = <Image src={Back} onClick={props.hiddenMatch}/>
    iconMatchs = <Image src={Delete} onClick={props.clearMatchs}/>
  }
  return(
      <Header>
        {iconBack}
        <Title>Astromatch</Title>
        {iconMatchs}
      </Header>

    )
}



export default NavBar