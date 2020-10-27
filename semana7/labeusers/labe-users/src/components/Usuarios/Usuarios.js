import React from 'react'

class Usuarios extends React.Component{
	render(){
		let usuarios = this.props.exibirUsuarios
		let exibeUsuarios = usuarios.map((usuario) => {
			return(
				<tr key={usuario.id}>
					<th>{usuario.name}</th>
					<th> X </th>
				</tr>
			)
		})
		return(
			<table>
				<thead>
					<tr>
						<th>Nome Cadastrado</th>
						<th>Deletar Usuario</th>
					</tr>
				</thead>
				<tbody>
					{exibeUsuarios}
				</tbody>
			</table>
		)
	}
}
export default Usuarios