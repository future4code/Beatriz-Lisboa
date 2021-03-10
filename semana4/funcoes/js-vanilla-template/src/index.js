// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO



// EXERCICIO 1- a)

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))  // Resposta: Será impresso 10
// console.log(minhaFuncao(10)) // Resposta: Será impresso 50

// 1- b)

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10)) 

// Se console.log for retirado dará erro, já que apenas (minhaFuncao(2)) e (minhaFuncao(10)) não são considerados uma função.
// Console.log é quem faz a função de impressão


//EXERCICIO 2- a)

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

//RESPOSTA: As saídas impressas serão "Darvas" e "Caio", já que o valor de Array é igual a 0, menor que 2. Os valores impressos são contatos a partir de 0, então serão 0 e 1.

//2- b)

//RESPOSTA: Se arrayDeNomes mudar de valor para "Amanda" e "Caio", serão impressos "Amanda" e "Caio", já que os valores continuam sendo contados como 0 e 1.


//EXERCICIO 3- a)

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

  //RESPOSTA: Array está sendo atribuído a uma nova Array. Se x for divisivel por 2, sem sobras, ele deverá ser multiplicado pelo valor dele mesmo (x), que será devolvido na nova Array.

//   const metodo = (arrayOriginal) => {
//     let arrayNova = [];
  
//     for (let primeiroNumero of array) {
//           if (primeiroNumero % 2 === 0) {
//           arrayNova.push(primeiroNumero * primeiroNumero)
//           }
//     }
  
//     return arrayNova;
//   }


//EXERCICIOS DE ESCRITA DE CÓDIGO

//EXERCICIO 4

function minhasInformações() {
 
    console.log("Eu sou Beatriz, tenho 25 anos, moro em Campinas e sou estudante.")

}
minhasInformações()