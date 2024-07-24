//Classificação de Nota
//Dada uma nota de um aluno (0 a 100), classifique-a em um conceito de acordo com a escala: A (90-100), B (80-89), C (70-79), D (60-69) e F (abaixo de 60).

let notaAluno = 48 ;
let mensagem;


switch(true){
    case notaAluno >= 90: 
         mensagem = 'Parabéns A';
        break;
    case notaAluno >= 80 :
         mensagem = 'B';
        break;
    case notaAluno >= 70 :
        mensagem ='C';
        break;
    case notaAluno >= 60  :
        mensagem ='D'
        break;
    case notaAluno < 60:
        mensagem ='F'
        break; 
    default:
       mensagem ='digite valores validos'
}

console.log(mensagem)


/**
 Dias da Semana

Dado um número de 1 a 7, exiba o nome do dia da semana correspondente (1 para Segunda-feira, 2 para Terça-feira, e assim por diante).
 */

let diaSemana = 6;
let = mensagem;

switch(diaSemana){
    case 1:
        mensagem = 'Segunda feira';
        break;
    case 2: 
        mensagem = 'Terça feira'
        break;
    case 3: 
        mensagem ='Quarta feira'
        break;
    case 4:
        mensagem = 'Quinta feira'
        break;
    case 5:
        mensagem = 'Sexta feira'
        break;
    case 6:
    case 7:
        mensagem = 'Final de semana'
        break;
    default:
        mensagem = 'Digite numeros validos'
}
console.log(mensagem)

/**
 Calculadora Simples

Dado um operador (+, -, *, /) e dois números, execute a operação matemática correspondente e exiba o resultado. 
 */

let operador =  "/";
let nuber1 = 2;
let nuber2 = 2;
let  calculo;

switch(operador){
    case '*':
        calculo  = nuber1 * nuber2;
        break; 
    case '+':
        calculo = nuber1 + nuber2;
        break;
    case '-':
        calculo = nuber1 - nuber2;
        break;
    case '/':
        calculo = nuber1 / nuber2;
        break;
    default:
        calculo = 'invalido'
    
}
console.log(calculo)


/*
Menu de Aplicação

Dado um texto que representa uma opção de menu ("Iniciar", "Configurações", "Sair", "Sobre"), exiba a ação associada a essa opção.
 */

let opcao = 'Sair';
let menuMensagem;
switch(opcao){
    case 'Iniciar':
        menuMensagem = 'Aperte o botão ao lado'
        break;
    case 'Configurações':
        menuMensagem = 'Abrindo configurações'
        break;
    case 'Sair':
        menuMensagem = 'saindo'
        break;
    case 'Sobre':
        menuMensagem = 'Estamos no mercado....'
        break;
    default:
        menuMensagem = 'Volte ao inicio'

}
console.log(menuMensagem)