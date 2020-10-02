/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/* console.log("Bem vindo ao jogo de Blackjack!")

 const conf = confirm( "Quer iniciar uma nova rodada?")

 if(conf){

 	//Cartas do usuário
 	let usuarioCartaUm = comprarCarta()
 	let usuarioCartaDois = comprarCarta()
 	let pontosUsuario = usuarioCartaUm.valor + usuarioCartaDois.valor
	console.log(`Usuário - cartas: ${usuarioCartaUm.texto} ${usuarioCartaDois.texto}  - pontuação ${pontosUsuario}`)

	//Cartas do Computador
	let computadorCartaUm = comprarCarta()
	let computadorCartaDois = comprarCarta()
	let pontosComputador = computadorCartaUm.valor + computadorCartaDois.valor
	console.log(`Computador - cartas: ${computadorCartaUm.texto} ${computadorCartaDois.texto} - pontuação ${pontosComputador}`)

	//Encontrando o vencedor
	if(pontosUsuario>pontosComputador){
		console.log("O usuário ganhou!")
	}else if(pontosComputador>pontosUsuario){
		console.log("O computador ganhou!")
	}else{
		console.log("Empate!")
	}
 }else{
 	console.log("O jogo acabou")
 }*/