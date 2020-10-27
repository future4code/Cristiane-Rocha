import React from 'react'


class Cadastro extends React.Component{
	render(){
		return(
			<div>
				<input value={this.props.nomeDoUsuario} onChange={this.props.recebeNome}/>
				<input value={this.props.emailDoUsuario} onChange={this.props.recebeEmail} />
				<button onClick={this.props.cadastrarUsuario}> Salvar </button>
			</div>
			)
	}
}
export default Cadastro