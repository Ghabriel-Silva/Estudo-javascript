/*let arrayQualquer = [1,2,3,4,5]

let recebeArray = arrayQualquer.map(function(nun){
 return nun * 2
})
console.log(recebeArray)
*/

/**
 * Crie uma função sortArray que aceita um array de números e uma função de callback que define a lógica de ordenação. Use essa função para ordenar um array em ordem crescente e depois em ordem decrescente.
 */

let arrayNuneros = [2,3,5,4,6,5,14]


function sortArray(arrayNun, callbackFunction){
    callbackFunction(arrayNun)
    return arrayNun;
}
function callbackFunction(arrayAordenar){
    arrayAordenar.sort(function(a,b){
      return a - b 
    }
    )
}

console.log(sortArray(arrayNuneros, callbackFunction))
