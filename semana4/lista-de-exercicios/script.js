//Exercícios de interpretação de código

/*
*
Exercicio 01
Resposta: No console será impresso uma variavel que recebe um função que ao ser chamada passa o valor 100 como parametro. A função pede ao usuário para digitar o valor da cotação do Dolar que retorna uma string com R$ + o valor passado por parametro vezes o valor da cotação digitado pelo usuário, e essa string que é impressa no console.
*
Exercicio 02
Resposta: É impresso no console duas constantes que recebem a mesma função com parametros diferentes, esta função atribui a variavel valorAposInvestimento o valor passado por parametro vezes um valor especifico para cada tipo de investimento, e retorna essa variavel. Como estas duas duas constantes passam a função os respectivos parametros: Açoes, 150 e Tesouro direto , 200, sendo o primeiro parametro o tipo de investimento e o segundo o valor do investimento, os valores impressos no console serão: 165 e TIPO DE INVESTIMENTO INFORMADO INCORRETO, pois Tesouro direto não esta sendo tratado na função e cai em defout do switch.
*
Exercicio 03
Resposta: Neste programa são criados 3 arrays, um de numero povoado com 14 numeros e os outros dois vazios. Em um loop for of adciona os numeros da primeira variavel, dividindo eles em pares e impares, jogando os pares em um dos arrays vazios e impares em outro. No fim é impresso no console a mensagem : | Quantidade total de números: 14 |(Que é o tamanho do primeiro array). Seguido de duas outras mensagens com o tamanho dos outros arrays : | 6 | (Tamanho do array de pares) | 8 | (Tamanho do array de impares)
*
Exercicio 04
Resposta: É criado um array com varios numeros, e duas variaveis numero1 que recebe o valor Infinity, e numero2 que recebe o valor 0, logo em seguida abre-se um loop for of, que se o numero da vez for menor que numero1 , a variavel numero1 recebe esse numero, o primeiro numero é 25, menor que infinito, logo a variavel numero1 recebe 25, não é uma atribuição somatoria e sim uma substituição, assim passando por todos os valores comparando com o valor da vez, a variavel numero1 recebe por fim -10 que é o menor numero, a mesma coisa acontece no segundo if do mesmo loop que faz a comparação inversa, no caso verifica se é maior, 25 o primeiro valor é maior que zero a sua atual atribuição,varrendo todo o array a variavel numero2 recebe o valor 1590 que é o maior valor do array, sendo impresso no console esses valores: -10 e 1590.
*
*/

//Exercícios de Lógica de Programação

//Exercicio 01
/*Pode se interar em uma lista com forEach, filter, map, for of e for*/
//Exemplo

let lista = [5,36,21,0,25,99,56,21,44,23,85,10,9,25,15,46,82]

//Modifica todos os valores da lista de numeros menores que 50 para 0 e imprime no console
lista.forEach((item,indice,array)=>{
	if(item < 50){
		array[indice] = item - item
	}
})
console.log(lista)

//Imprime no console uma mensagem com um array de todos os itens do array listaStrings que tem a letra o.
let listaStrings = ["Dado","Pincel","Lapis","Tabuleiro","Caneta","Peças","Jogadores"]

const comALetraO = listaStrings.filter((item)=>{
		return item.includes("o")
})

console.log("Os items que tem a letra o são", comALetraO)


//Imprime no console um array que contem os mesmos numeros do array lista 2, porém com todos os numeros pares com seus valores dobrados.
let lista2 = [0,6,25,32,14,25,6,9,12,36,52,91,63,41,85,42,12]

let numerosParesDobrados = lista2.map((item)=>{
	if(item % 2 === 0){
		return item * 2
	}else{
		return item
	}
})
console.log(numerosParesDobrados)

//Exercicio 02
/*
*
Respostas:
a) false
b) false
c) true
d) true
e) true
*
*/

//Exercicio 03 
/*
*
Resposta: Detectei algumas falhas no código do meu amig, começando pela variavel quantidadeDeNumerosPares que não esta recebendo nenhum valor, o que gerara um erro de undefined, em seguida no while é necessário que a variavel i seja incrementada, pois senão teremos um loop infinto parado no numero 0.
*
*/

//Exercicio 04

let numero1 = Number(prompt("Digite um numero: "))
let numero2 = Number(prompt("Digite outro numero: "))


function verificaNumeroMaior(a,b){
	if(a > b){
		return a 
	}else{
		return b
	}

}

function verificaDivisao(a,b){
	if(a % b === 0){
		return a + " é divisivel por " + b
	}else{
		return a + " não é divisivel por " + b
	}
}

function diferencaNumeros(a,b){
	if(a > b){
		return a - b
	}else{
		return b - a
	}
}

console.log("ENTRADA")
console.log(numero1 + " e " + numero2)
console.log("O maior é: " + verificaNumeroMaior(numero1,numero2) )
console.log(verificaDivisao(numero1,numero2))
console.log(verificaDivisao(numero2,numero1))
console.log("A diferença entre eles é: " + diferencaNumeros(numero1,numero2))


// Exercicio 05

function verificaSegundo(array){
	let menor = Infinity
	let maior = 0
	let indiceMaior = 0
	let indiceMenor = 0
	let maiorValor = 0
	let menorValor = Infinity

	array.forEach((item,ind)=>{
		if(item>maior){
			maior = item
			indiceMaior = ind
		}else if(item<menor){
			menor = item
			indiceMenor = ind
		}
	})

	console.log(maior,menor)

	 array.splice(indiceMaior, 1);
	 array.splice(indiceMenor, 1);

	array.forEach((item,ind)=>{
		if(item>maiorValor){
			maiorValor = item
			indiceMaior = ind
		}else if(item<menorValor){
			menorValor = item
			indiceMenor = ind
		}
	})
	console.log(maiorValor,menorValor)

}

let arrayNumeros = [56,32,23,210,365,2,14,32,39,25,21,36,198,215,125,12,36,10,32]
verificaSegundo(arrayNumeros)


//Exercicio 2

const alertFuture4 = () => {
	alert("Hello Future4")
}
alertFuture4()

//Exercícios de Objetos

//Exercicio 01
 /*
 *
 Resposta: Objetos são como objetos na vida real, que tem suas utilidades e caracteristicas, usamos objetos para armazenar e ultilizar dados, como por exemplo dados de um cadastro.
 *
 */
 
 //Exercicio 02
 function criaRetangulo(lado1,lado2){
 	let retangulo = {
 		largura: lado1,
 		altura: lado2,
 		perimetro: 2 * (lado1 + lado2),
 		area: (lado1 * lado2)
 	}
 	return retangulo
 }

 console.log(criaRetangulo(52,35))

 //Exercicio 03
 //título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes)
 //Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n

 let meuFilmeFavorito = {
 	titulo:"The Notebook (Diário de uma paixão)",
 	ano: 2004,
 	diretor: "Nick Cassavetes",
 	atores:["Rachel McAdams","Ryan Gosling","James Garner","James Marsden","Gena Rowlands"]
 }
 document.write(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.atores}`)
 console.log((`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.atores}`))

 //Exercicio 04
 //nome, idade, email e endereco

 let pessoa = {
 	nome: "Ana Batriz",
 	idade: 25,
 	email:"anabeatriz@email.com",
 	endereco: "Rua da casa dela, numero 00, Bairro: logo ali"
 }
 function anonimizarPessoa(object){
 	let pessoaAnonima = {
 		...object,
 		nome: "ANONIMO"
 	}
 	return pessoaAnonima
 }
 console.log(anonimizarPessoa(pessoa))

 //Exercícios de Funções de array

 //exercicio 01
 let pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
function retornaAdultos(array){
	let soAdultos = array.filter((pessoa)=>{
		return pessoa.idade >= 20
	})
	return soAdultos
}

function retornaCriancas(array){
	let soCriancas = array.filter((pessoa)=>{
		return pessoa.idade < 20
	})
	return soCriancas
}
console.log(retornaCriancas(pessoas))
console.log(retornaAdultos(pessoas))

// Exercicio 02
const array = [1, 2, 3, 4, 5, 6]

//a)
function multiplicaPorDois(array){
	let multiplicado = array.map((item)=>{
		return item * 2
	})
	return multiplicado
}
console.log(multiplicaPorDois(array))

//b)
function multiplicaPorTresToString(array){
	let porTresString = array.map((item)=>{
		return String(item * 3)
	})
	return porTresString
}
console.log(multiplicaPorTresToString(array))

//c)
function parOuImpar(array){
	let parImpar = array.map((item)=>{
		if(item % 2 === 0){
			return `${item} é par`
		}else{
			return `${item} é impar`
		}
	})
	return parImpar
}
console.log(parOuImpar(array))

//Exercicio 03