const nome = prompt('Digite o seu nome ')
document.body.innerHTML += ` Seu nome é: ${nome} </br>`
document.body.innerHTML += `seu nome tem ${nome.length}, letras </br>`
document.body.innerHTML += `a segunda letra do seu nome é ${nome[1]} </br>`
document.body.innerHTML += `seu nome em letras minusculas ${nome.toLocaleLowerCase()} </br>`
document.body.innerHTML += `seu nome em letras minusculas ${nome.toUpperCase()} </br>`



