function calculaDois(n1,n2){
      let resultado = n1 * n2
      console.log(resultado)
}
calculaDois(10,2)

calculaDois(5,2)

function myName(name){
    console.log(`ola tudo bem ${name}`)
}
myName('Gabriel')


//functions anonimas 


let saudacao =  function(nome){
    return `ola, ${nome}`
}
console.log(saudacao('Gabriel'))

//function callback 

let numeros = [1,2,3,4,5,6,7,8,9]
let dobrados = numeros.map(function(numeros){
    return numeros * 2
})
console.log(dobrados)


//Arrow function 

let saud = (nome)=>{
    return `ola, ${nome}`
}
console.log(saud('gabriel'))

//Apenas um parâmetro os parênteses podem ser omitidos

let dobro = n1 =>{
    return n1*2
}
console.log(dobro(3))


//Se ouver apenas um expreção no corpo você pode omitir as chave e a palavra chave
let tripo = n1 => n1 *3;
console.log(tripo(3))


//Arrow functions como callback
let numero = [1,2,3,4,5]

let myarray = numero.map(numero => numero*2)

console.log(myarray)

