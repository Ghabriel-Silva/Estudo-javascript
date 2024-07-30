//Crie um contador regressivo que exibe uma mensagem quando chega a zero.


function contadorRegrecivo(n){
    while(n>0){
        console.log(n)
        n--;
    }
    console.log(`chegoua zero`)
}

console.log(contadorRegrecivo(10))