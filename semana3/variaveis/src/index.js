//**Exercícios de interpretação de código**

/*
*
Exercicio1:
*
a = 10
b = 10
console.log(b)
b = 5
console.log(a, b)
*
Resposta: Será impresso:
10
10 5
*/


/*
*
Exercicio2
*
a = 10
b = 20
c = a
b = c
a = b
console.log(a, b, c)
*
Resposta: Será impresso:
20 10 10
* 
*/


//**Exercícios de escrita de código**
//Exercicio1

let name;
let age;
console.log(typeof name, typeof age)
 // O console mostrou o tipo com undefined

 name = prompt("Digite seu nome:")
 age = prompt("Digite sua idade:")

 console.log(typeof name, typeof age)
//Imprimiu tipo string para as duas variáveis

console.log(`Olá ${name}, você tem ${age} anos!`)



//Exercicio2
let nameAtual = prompt("Qual é seu nome?")
let locality = prompt("Onde você mora?")
let eat = prompt("O que você gosta de comer?")
let color = prompt("Qual sua cor preferida?")
let mother = prompt("Qual o nome da sua mãe?")

console.log("Qual é seu nome?")
console.log(`Resposta: ${nameAtual}`)
console.log("Onde você mora?")
console.log(`Resposta: ${locality}`)
console.log("O que você gosta de comer?")
console.log(`Resposta: ${eat}`)
console.log("Qual sua cor preferida?")
console.log(`Resposta: ${color}`)
console.log("Qual o nome da sua mãe?")
console.log(`Resposta: ${mother}`)


//Exercicio3

let foods = ["massa","frango","sorvete","costela","chocolate"]

console.log(foods)
console.log(`Essas são as minhas comidas preferidas: 
	${foods[0]}
	${foods[1]}
	${foods[2]}
	${foods[3]}
	${foods[4]}`)

let newFood = prompt("Qual sua comida preferida?")
foods[1] = newFood

console.log(`Essas são as minhas comidas preferidas:
	${foods[0]}
	${foods[1]}
	${foods[2]}
	${foods[3]}
	${foods[4]}`)

	//Exercicio4

	let ask = ["Comprou roupa esse ano?","Viajou para fora do estado?", "Leu algum livro?"]

	let answers = [confirm(ask[0]),confirm(ask[1]),confirm(ask[2])]

	console.log(ask[0],": ",answers[0])
	console.log(ask[1],": ",answers[1])
	console.log(ask[2],": ",answers[2])