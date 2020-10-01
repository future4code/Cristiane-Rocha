/************ **Exercícios de interpretação de código** ****************/
//Exercicio 01
/*
*
*
Imprime:
false
false
true
tipo booleano
*
*
*/

//Exercicio 02
/*
*
*
Imprime:
indefinido (undefined)
null
11
3
Imprime o array inteito ([3,4,5,6,7,8,9,10,11,12,13])
Imprime a posição 6 do array (9)
*
*
*/

/********************** **Exercícios de escrita de código** *******************/

/*//Exercicio 01
let yourAge = prompt("Qual a sua idade?")
let gAge = prompt("Qual a idade da sua melhor amiga?")
let bAge = prompt("Qual a idade do seu melhor amigo?")

console.log("A sua idade é maior que a do seu melhor amigo?", yourAge > bAge)
console.log("A diferença da idade de vocês é: ", yourAge - bAge)

//Exercicio 02
let pair = prompt("Digite um numero par:")

console.log(parseInt(pair) % 2)
*/
/*Se for impar imprime o resto da divisão, se for par, imprime 0*/

//Exercicio 03

/*let listaDeTarefas = []

let tarefa1 = prompt("Digite uma tarefa")
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt("Digite mais uma tarefa")
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt("Digite outra tarefa")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)
*/
//Exercicio 04

/*let name = prompt("Digite seu nome: ")
let email = prompt("Digite seu email: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${name}!`)
*/
/********************* Desafio *************************/

//Desafio 01
/*
var fahrenheit = 77
var Kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(Kelvin + "°K")

var celsius = 80
var fahrenheit = celsius*9/5 + 32
console.log(fahrenheit + "°F")

celsius = 30
fahrenheit = celsius*9/5 + 32
Kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(fahrenheit + "°F  " + Kelvin + "°K")

celsius = prompt("Digite graus em celsius, para converter para Fahrenheit e Kelvin: ")
fahrenheit = celsius*9/5 + 32
Kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(fahrenheit + "°F  " + Kelvin + "°K")
*/
//Desafio 02

/*let cons = 280
let value =  cons * 0.05
console.log("Valor: ", value) 
console.log("Valor a pagar com desconto de 15%: ", (15 * value) / 100) */

//Desafio 03
let lb = 20 * 2.2046 
console.log(`20lb equivalem a ${lb} kg`)

let oz = 10.5 / 35.274
console.log(`10.5oz equivalem a ${oz} kg`)

 let mi = 100 / 0.00062137
 console.log(`100mi equivalem a ${mi} m`)

 let ft = 50 / 3.2808
  console.log(`50ft equivalem a ${mi} m`)

 let gal = (103.56 *  473176473) / 125000000
 console.log(`103,56gal equivalem a ${gal} l`)

  let xic = 450 * 0.24
 console.log(`450xic equivalem a ${xic} l`)

 let conv = prompt("Escolha um valor em xicaras para converter em litros: ")
 xic = conv * 0.24
 console.log(`${conv}xic equivalem a ${xic} l`)