/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO*/

/*EXERCICIO 1

a = 10
b = 10

console.log(b) --> IMPRIMIRÁ (10)

b = 5

console.log(a , b) --> IMPRIMIRÁ (10 , 5)*/

/*EXERCÍCIO 2

a = 10
b = 20
c = a 
b = c
a = b

console.log(a , b , c) --> IMPRIMIRÁ (10 , 10 , 10)*/

/*EXERCÍCIOS DE ESCRITA DE CÓDIGO*/

/*EXERCÍCIO 1*/

let nome
let idade

console.log (typeof nome, typeof idade) 

//RESPOSTA D: As variáveis 'nome' e 'idade' tiveram o valor impresso como undefined, porque ainda não tiveram valor atribuído.//

nome = prompt('Qual é o seu nome?')
idade = prompt('Qual a sua idade?')

console.log(typeof nome, typeof idade)

//RESPOSTA E: Nesse caso, as variáveis 'nome' e 'idade' tiveram o valor impresso como string já que foram adicionados textos, apesar de ter sido inserido um número.//

console.log('Olá' , nome , 'você tem' , idade , 'anos')