/***********************Exercícios de interpretação de código*****************/

//Exercicio 01
/*
*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*
Resposta: 4
*
*/

//Exercicio 02

/*
*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*
Resposta:
a) 19,21,23,25,27,30
b) for(let numero of lista) {
	lista[numero]
}
*
*/

//Desafio

/*
*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*
Resposta: 0
*
*/

/**************Exercícios de escrita de código**********************/

//Exercicio 03
let arrayOriginal = [201,20,36,14,33,98,20,103,25]

//a)
for(let item of arrayOriginal){
	console.log(item)
}

//b)
for(let item of arrayOriginal){
	console.log(item/10)
}

//c)
let novoArray = []

for(add of arrayOriginal){
	if((add%2)===0){
		novoArray.push(add)
	}
}
console.log(novoArray)

//d)
let arrayString = []
for(let b=0;b<arrayOriginal.length;b++){
	arrayString.push(`O elemento do índex ${b} é: ${arrayOriginal[b]}`)
}
console.log(arrayString)

//e)
let maximo = 90
let minimo = 90
for(let c=0;c<arrayOriginal.length;c++){
	if(arrayOriginal[c] > maximo){
		maximo = arrayOriginal[c]
	}else if(arrayOriginal[c] < minimo){
		minimo = arrayOriginal[c]
	}
}

console.log(`O maior numero é ${maximo} e o menor numero é ${minimo}`)

/******************** Desafio **********************/
console.log("Vamos Jogar!")
let numeroSecreto = Number(prompt("Digite o numero que esta pensando: (Não deixe o amiguinho ver)"))
console.log("Hora do colega adivinhar, vá digitando numeros ate acertar, você terá dicas em cada tentativa")
let chute = numeroSecreto - 1;
let tentativas = 0
while(chute!=numeroSecreto){
	chute = Number(prompt("Chute um valor: "))
	if(chute<numeroSecreto){
		console.log(`O numero chutato foi ${chute}`)
		console.log("Errou!!! O número Secreto é maior")
	}else if(chute>numeroSecreto){
		console.log(`O numero chutato foi ${chute}`)
		console.log("Errou!!! O número Secreto é Menor")
	}
	tentativas++
}

console.log(`Parabéns depois de ${tentativas} tentativas você acertou ! O numero Secreto era ${numeroSecreto}`)