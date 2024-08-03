//- [ ]  Desenvolva uma função `map` personalizada que modifique cada item de um array.

let arrayNun = [1,2,3,4,5,6,8,7,5,6]

//let arrayDivto2 = arrayNun.fil(arrayNun => arrayNun % 2 === 0) 

//console.log(arrayDivto2)
let arrayVazio = []
arrayNun.forEach(nun =>{
    if(nun % 2 === 0){
        arrayVazio.push(nun)
    }
})
console.log(arrayVazio)