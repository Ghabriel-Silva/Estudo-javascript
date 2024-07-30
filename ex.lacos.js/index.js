// Exercício 1: Soma de Números
// Escreva um programa que peça ao usuário para digitar um número positivo n e, em seguida, some todos os números de 1 até n. Exiba o resultado no console.

/*let number1 = parseInt(prompt('Digite um número positivo')); // Entrada do usuário
let sum = 0; // Variável para acumular a soma
let counter = 1; // Variável de controle do laço

while (counter <= number1) {
    sum += counter; // Adiciona o valor atual de counter à soma
    counter++; // Incrementa o contador
}

/**
 conter 1 -> 2 -> 3 -> 4 -> 5
 sun    1 -> 3 -> 6 -> 10 -> 15

 */
//console.log(`A soma de todos os números de 1 até ${number1} é: ${sum}`);




/**
 Exercício 2: Números Pares de 1 a 50
Escreva um programa que imprima todos os números pares de 1 a 50.
 */


/*for(let a = 0 ; a <= 50; a++){
   if(a % 2 === 0){
    console.log(a)
   }
}
0 - 2 - 4
*/

/*let n2 = 1
function  tabuada(n1){
    while(n2 <= 10){
        resultado = n1 * n2
        console.log(`${n1} x ${n2} = ${resultado}`)
        n2++
    }
}
tabuada(2)
*/

/*function numeroPrimos(numero) {
    let araynum = [];
  
    for (let numeroAtual = 2; numeroAtual <= numero; numeroAtual++) {
      let numeroprimo = true;
  
      for (let numerodivisor = 2; numerodivisor <= (numeroAtual); numerodivisor++) {
        if (numeroAtual % numerodivisor === 0 && numerodivisor !== numeroAtual) {
          numeroprimo = false;
          break; // Não precisa verificar mais divisores
        }
      }
  
      if (numeroprimo) {
        araynum.push(numeroAtual);
      }
    }
  
    return araynum; // Mover o return para fora do laço externo
  }
  
  console.log(numeroPrimos(10));
  */

  /**
   * Desenvolver uma função em JavaScript que encontre todos os números primos em um intervalo específico e armazene esses números em um array.
   */

  function numerosPrimos(numero){
    let arayNumero = [];
    for(let numeroAtual = 2; numeroAtual <= numero; numeroAtual++){
      let ehprimo = true 
      for(numerodivisor = 2; numerodivisor <=  numeroAtual; numerodivisor++){

        if(numeroAtual % numerodivisor === 0 && numerodivisor !== numeroAtual){
          ehprimo = false
          break;
        }
      }
      if(ehprimo){
        arayNumero.push(numeroAtual)
      }
    }
    return arayNumero;
  }
  console.log(numerosPrimos(10))
 
  /**
   * Resumo
Para cada valor de numeroAtual, a variável ehprimo é inicialmente true.
O loop interno verifica todos os divisores de 2 até numeroAtual.
Se numeroAtual for divisível por algum numerodivisor que não seja ele mesmo, ehprimo é definido como false.
Após o loop interno, se ehprimo ainda for true, numeroAtual é adicionado ao array arayNumero.
O processo se repete para cada número de 2 até numero.
   */