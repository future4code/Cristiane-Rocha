/*****************git checkout -b semana3-aula11***********************/

//Exercicio 01
/*
*
```jsx
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
```
*
Resposta: Este prgrama colhe um numero do usuário e verifica se o resto da divisão de por 2, se for 0 mostra a mensagem "Passou no teste.", caso contrário mostra a mensagem "Não passou no teste."
*
*/

//Exercicio 02

/*
*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
/*
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*
Resposta: 
a) Este programa recebe do usuario uma fruta, no swicth é feito a verificação dependendo da fruta escolhida, em cada casa é passado um valor, no final imprime a mensagem dizendo valor da fruta escolhida.
b) Se a fruta escolhida for maçã, imprime a mensagem "O preço da fruta maça é 2.25"
c) Se a fruta escolhida for pera e não houver o break do defout, a mensagem impressa será "O preço da fruta maça é 5"
*
*/

//Exercicio 03

/*
*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)
*
Resposta:
a) A primeira linha esta recebendo um numero do usuário, convertendo ele para o tipo number e armazenando na consatante "numero".
b) Se o usuário digitar o numero 10, a mensagem impressa será "Esse numero passou no teste", caso seja -10 a mensagem será um erro. 
c) Sim haverá erro no console, pois a variavel mensagem esta no escopo do if, onde o programa não entrou por ser um numero menor que 0.
*
*/

/***********************Exercícios de escrita de código*****************************/

//Exercicio 04

const age = Number(prompt("Digite a sua idade: "))

if(age>= 18){
	console.log("Você pode dirigir!")
}else{
	const weit = 18 - age
	console.log("Você não pode dirigir")
	console.log(`Aguarde ${weit} anos para poder dirigir, você ainda é menor de idade!`)//resolvi fazer uma frecurinha aqui :)
}

//Exercicio 05

const hour = prompt("Qual seu turno de estudos, digite M para matutino, V para verpertino e N para noturno: ")

if(hour.toUpperCase() === "M"){
	console.log("Bom Dia!")
}else if(hour.toUpperCase() === "V"){
	console.log("Boa Tarde!")
}else if(hour.toUpperCase() === "N"){
	console.log("Boa noite!")
}else{
	console.log("Valor digitado invalido, por favor escolha entre M,V ou N, reinicie o navegador.")//Resolvi tratar o erro, porque se não qualquer outro valor digitado iria cair em Boa noite!
}

//Exercicio 06
const momen = prompt("Qual seu turno de estudos, digite M para matutino, V para verpertino e N para noturno: ")
let maius = momen.toUpperCase()
switch (maius) {
	case "M":
	    console.log("Bom Dia!")
	    break;
	case "V":
		console.log("Boa Tarde!")
		break;
	case "N":
		console.log("Boa noite!")
		break;
	default:
		console.log("Valor digitado invalido, por favor escolha entre M,V ou N, reinicie o navegador.")
		break;
}

//Exercicio 07

const style = prompt("Qual o gênero do filme? ")
const value = Number(prompt("Qual o valor do ingresso? "))

if((style.toUpperCase()==="FANTASIA") && (value<=15)){
	console.log("Bom Filme !")
}else{
	console.log("Escolha outro filme!")
}

/*************************Desafios***********************/

//Desafio 01
const styleDois = prompt("Qual o gênero do filme? ")
const valueDois = Number(prompt("Qual o valor do ingresso? "))

if((styleDois.toUpperCase()==="FANTASIA") && (valueDois<=15)){
	let snack = prompt("Qual snack deseja comprar para acompanhar o filme: ")
	console.log(`Bom filme ! e com ${snack}`)
}else{
	console.log("Escolha outro filme!")
}

//Deaafio 02
 const nome = prompt("Digite seu nome: ")
 const tipo = prompt("Escolha o tipo de jogo (IN para internacional e DO para domestico):")
 const etapa = prompt("Escolha a etapa do jogo (SF para semi-final, DT para decisão do terceiro lugar e FI para final)")
 const cat = Number(prompt("Escolha a categoria ( entre 1 e 4): "))
 const qtd = prompt("Deseja comprar quantos ingressos? ")

let tj = ""
let ej = ""
let vj = ""
console.log("---Dados da compra--- ")
console.log(`Nome do cliente:  ${nome} `)

 if(tipo.toUpperCase()==="DO"){
 	tj = "Nacional"
 	if(etapa.toUpperCase()==="SF"){
 		ej = "Semifinal";
 		switch (cat){
 			case 1:
 				vj = 1320.00
 				break;
 			case 2:
 				vj = 880.00
 				break;
 			case 3:
 				vj = 550.00
 				break;
 			case 4:
 				vj = 220.00
 				break;
 		}
 	}else if(etapa.toUpperCase()==="DT"){
 		ej = "Decisão do terceiro lugar";
 		switch (cat){
 			case 1:
 				vj = 660.00
 				break;
 			case 2:
 				vj = 440.00
 				break;
 			case 3:
 				vj = 330.00
 				break;
 			case 4:
 				vj = 170.00
 				break;
 		}
 	}else if(etapa.toUpperCase()==="FI"){
 		ej = "Final";
 		switch (cat){
 			case 1:
 				vj = 1980.00
 				break;
 			case 2:
 				vj = 1320.00
 				break;
 			case 3:
 				vj = 880.00
 				break;
 			case 4:
 				vj = 330.00
 				break;
 		}
 	}
 }else if(tipo.toUpperCase()==="IN"){
 	tj = "Internacional"
 	if(etapa.toUpperCase()==="SF"){
 		ej = "Semifinal";
 		switch (cat){
 			case 1:
 				vj = 1320.00
 				break;
 			case 2:
 				vj = 880.00
 				break;
 			case 3:
 				vj = 550.00
 				break;
 			case 4:
 				vj = 220.00
 				break;
 		}
 	}else if(etapa.toUpperCase()==="DT"){
 		ej = "Decisão do terceiro lugar";
 		switch (cat){
 			case 1:
 				vj = 660.00
 				break;
 			case 2:
 				vj = 440.00
 				break;
 			case 3:
 				vj = 330.00
 				break;
 			case 4:
 				vj = 170.00
 				break;
 		}
 	}else if(etapa.toUpperCase()==="FI"){
 		ej = "Final";
 		switch (cat){
 			case 1:
 				vj = 1980.00
 				break;
 			case 2:
 				vj = 1320.00
 				break;
 			case 3:
 				vj = 880.00
 				break;
 			case 4:
 				vj = 330.00
 				break;
 		}
 	}
 }else{
 	console.log("Por favor digite as opçoes corretamente!")//tratamento de erro
 }

 console.log(`Tipo do jogo:  ${tj}`)
console.log(`Etapa do jogo: ${ej}`)
console.log(`Categoria do jogo:${cat}`)
console.log(`Quantidade de ingressos a ser impressos: ${qtd}`)
console.log("---Valores--- ")

let preco = qtd * vj

if(tipo.toUpperCase()==="DO"){
	console.log(`Valor do ingresso: R$ ${vj}`)
	console.log(`Valor total:  R$ ${preco}`)
}else if(tipo.toUpperCase()==="IN"){
	console.log(`Valor do ingresso: $ ${vj}`)
	console.log(`Valor total:  $ ${preco}`)
}