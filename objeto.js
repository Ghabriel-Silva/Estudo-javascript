let pessoa = {
    nome: 'gabriel',
    idade: 22,
    profissao: 'engenheiro de softwer' ,
    saudacao: function(){
        return `ola neu nome é ${this.nome}, e tenho ${this.idade}, e trabalho como, ${this.profissao}`
    } 
}
pessoa.idade = 26 
pessoa.profissao = 'Desenvolvedor'
console.log(pessoa.saudacao())

/**
 * 1. **Criar um Objeto Simples**
Crie um objeto chamado `carro` com as propriedades `marca`, `modelo` e `ano`. Adicione um método `descricao` que retorna uma string com a descrição do carro.
 */

let carro ={
    marca:"Tesla",
    modelo:"Eletrico",
    ano: 2023 ,
    descricao: function(){
        return `seu carro é ${this.marca}, ${this.modelo},${this.ano}`}
}

console.log(carro.descricao())