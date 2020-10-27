import React from 'react'

class OpenUsuarios extends React.Component{
	render(){
		return(
			<button onClick={this.props.puxarUsuariosCadastrados}>Visualizar Usuários Cadastrados </button>
		)
		
	}
}
export default OpenUsuarios