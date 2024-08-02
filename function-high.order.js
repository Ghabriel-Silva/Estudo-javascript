
function falaNome(parametroA){
    const digaAlgo = parametroA('1')
    return `0 ${digaAlgo}`
}

console.log(falaNome(adeusNome => `2, ${adeusNome}`))


function executafucao(fucao, valor){
    return fucao(valor) //recebecomo argumento(parâmetro), o valor 
}
function dobrar(numero){
    return numero*2
}
console.log(executafucao(dobrar, 5 ))



function criarmultiplicador(multiplicador){
    return function(numero){
        return numero*multiplicador
    }
}
const multiplicadorPor3 = criarmultiplicador(3)

console.log(multiplicadorPor3(5))


