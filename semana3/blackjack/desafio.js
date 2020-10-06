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

console.log("Bem vindo ao jogo de Blackjack!")

 const conf = confirm( "Quer iniciar uma nova rodada?")

 if(conf){

 	//Cartas do usuário
 		let cartasUsuario = []
	 	 cartasUsuario[0] = comprarCarta()
	 	 cartasUsuario[1] = comprarCarta()

	 	//Sorteia a carta novamente se forem dois ases
	 	while((cartasUsuario[0].valor === 11) && (cartasUsuario[1] === 11)){
	 		cartasUsuario[0] = comprarCarta()
	 		cartasUsuario[1] = comprarCarta()
	 	}

	 		//Soma os pontos iniciais do Usuario
	 		let pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
 	
		//Cartas do Computador
		let cartasComputador = []
		 cartasComputador[0] = comprarCarta()
		 cartasComputador[1] = comprarCarta()

		//Sorteia a carta novamente se forem dois ases
	 	while((cartasComputador[0].valor === 11) && (cartasComputador[1] === 11)){
	 		cartasComputador[0] = comprarCarta()
	 		cartasComputador[1] = comprarCarta()
	 	}

	 	//Soma os pontos iniciais do computador
	 	let pontosComputador = cartasComputador[0].valor + cartasComputador[1].valor

	 //Array para armazenar os textos das cartas
	 let textoCartaUsuario = []
	 textoCartaUsuario.push(cartasUsuario[0].texto)
	 textoCartaUsuario.push(cartasUsuario[1].texto)

	 let textoCartaComputador = []
	 textoCartaComputador.push(cartasComputador[0].texto)
	 textoCartaComputador.push(cartasComputador[1].texto)


	 //Pergunta se deseja comprar outra carta
	 let comprar = confirm(`Suas cartas são ${textoCartaUsuario}. A carta revelada do computador é ${textoCartaComputador[0]}.Deseja comprar mais uma carta?`)
	 
	 //Variaveis para contagens nos while
	 let indice = 1
	 let indice2 = 1

	 //Loop para compra das cartas do Usuario
	 
	 while((comprar) && (pontosUsuario <= 21)){
	 	indice ++
	 	cartasUsuario[indice] = comprarCarta()
	 	textoCartaUsuario.push(cartasUsuario[indice].texto)
	 	comprar = confirm(`Suas cartas são ${textoCartaUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.Deseja comprar mais uma carta?`)
	 		pontosUsuario = pontosUsuario + cartasUsuario[indice].valor

	 }

	 //Verificação dos pontos
	 if((pontosUsuario>21) && (pontosComputador<=21)){
	 	alert(`Suas cartas são ${textoCartaUsuario}. Sua pontuação é ${pontosUsuario}. As cartas do computador são ${textoCartaComputador}.A pontuação do computador é ${pontosComputador} !! O computador ganhou !! `)
	 }else if((pontosUsuario<=21) && (pontosComputador<=21) ){
	 	 	while(pontosComputador<=pontosUsuario){
		 		indice2 ++
		 		cartasComputador[indice2] = comprarCarta()
		 		textoCartaComputador.push(cartasComputador[indice2].texto)
		 		alert("Cartas do Computador" + textoCartaComputador)
		 		pontosComputador = pontosComputador + cartasComputador[indice2].valor
	 		}	 
		 	//Se o computador Ganhar
		 	if((pontosComputador>pontosUsuario)&&(pontosComputador<=21)){
		 		alert(`Suas cartas são ${textoCartaUsuario}. Sua pontuação é ${pontosUsuario}. As cartas do computador são ${textoCartaComputador}.A pontuação do computador é ${pontosComputador} !! O computador ganhou !! `)
		 	//Se o usuario ganhar
		 	}else if(((pontosComputador<pontosUsuario)&&(pontosComputador<=21))||(pontosComputador>21)){
		 		alert(`Suas cartas são ${textoCartaUsuario}. Sua pontuação é ${pontosUsuario}. As cartas do computador são ${textoCartaComputador}.A pontuação do computador é ${pontosComputador} !! Você ganhou !! `)
		 	}
	 }else{
	 	alert(`Suas cartas são ${textoCartaUsuario}. Sua pontuação é ${pontosUsuario}. As cartas do computador são ${textoCartaComputador}.A pontuação do computador é ${pontosComputador} !! O jogo acabou e ninguém ganhou !! `)
	 }


}