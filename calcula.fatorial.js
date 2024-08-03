/**
 * Exercícios sobre Números Primos
Verificar se um Número é Primo

Descrição: Escreva uma função isPrimo(n) que receba um número n e retorne true se n for um número primo e false caso contrário.
Desafio: Um número primo é um número maior que 1 que só pode ser dividido por 1 e por ele mesmo.
 */

function isPrimo(n){
    let arrayVazio = []
    for(let nunatual = 2; nunatual<n; nunatual++){
        let = ehPrimo = true
        for(let numDiv = 2; numDiv <= nunatual; numDiv++){
            if(nunatual % numDiv === 0 && nunatual !== numDiv){
                ehPrimo = false 
                break;
            }
           
        }
        if(ehPrimo){
            arrayVazio.push(nunatual)
        }
    
    }
    return arrayVazio;
}

console.log(isPrimo(100))