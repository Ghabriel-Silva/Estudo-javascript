//Desenvolva um script que exiba os números de 1 a 100 e indique se são múltiplos de 3 ou 5 e guarde em um array.



function multiplos3(numberA){
    let arraydivto3 = []; 
    for(let numberB = 1; numberB <= numberA; numberB++){
        if(numberB % 3 === 0 ){
            arraydivto3.push(numberB)
          
        }
    
    }
    return arraydivto3;
}

console.log(multiplos3(30))

