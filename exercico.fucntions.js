//Desenvolva uma função recursiva que calcula o fatorial de um número.


function fatorial(n){
    if(n<0){
        return `O fatorial não é valido para numeros negativos`
    }
    let resultado = 1
    for(let i = 1; i <= n; i++){
        resultado *= i
    }
    return resultado
}
console.log(fatorial(50))

function fatorialRecursivo(n) {
    // Verificação inicial para números negativos
    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    }

    // Caso base: o fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Chamada recursiva: n * fatorialRecursivo(n - 1)
    // Isso decompõe o problema em subproblemas menores
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5)); // Saída: 120
