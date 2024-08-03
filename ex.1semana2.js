/**
 * Criação de um Contador Regressivo

Descrição: Crie um script que implemente um contador regressivo de 10 a 0. Quando o contador chegar a zero, exiba a mensagem "Tempo esgotado!".
Desafio: Utilize o laço while para implementar o contador.

 */
let i = 10
while(i > 0 ){
    console.log(i)
    i--
   if(i === 0){
    console.log(`Tempo esgotado`)
   }
}

/**
 * Números Múltiplos de 3 e 5

Descrição: Escreva um programa que exiba os números de 1 a 100. Para cada número, imprima "Múltiplo de 3" se o número for divisível por 3, "Múltiplo de 5" se o número for divisível por 5 e "Múltiplo de 3 e 5" se o número for divisível por ambos.
Desafio: Utilize o laço for e a estrutura condicional if...else
 */
let arrayDivto3 = []
let arrayDivto5 = []
let arrayDivto3and5 = []

for( let cont =1 ; cont <=100; cont++ ){
   
    if(cont % 3 === 0 && cont % 5 ===0 ){
       arrayDivto3and5.push(cont)
    }else if(cont % 3 === 0){
        arrayDivto3.push(cont)
    }else if( cont % 5 === 0){
        arrayDivto5.push(cont)
    }
}

console.log(`È divisivel por 3:   ${arrayDivto3}`)
console.log(`È divisivel por 5:   ${arrayDivto5}`)
console.log(`È divisivel por 5 e 3:   ${arrayDivto3and5}`)
