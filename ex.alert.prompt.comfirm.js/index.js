let queroentrar = confirm('Você deseja entrar para calcular?');

if (queroentrar) {
  let nun1 = prompt('Digite um número');
  let nun2 = prompt('Digite mais um número');
  
  // Convertendo as entradas para números
  nun1 = converteNun(nun1)
  nun2 = converteNun(nun2)
  // Verificando se são números válidos
  calculo(nun1, nun2);

} 

// Converte em número 
function converteNun(n) {
  let nun = Number(n)
  if(isNaN(nun)){
    alert('Digite um numero Valido')
  }
    return nun;

}

// Verifica se é um número
function calculo(n1, n2) {
    let calcular = n1 + n2;
    alert(`O resultado é ${calcular}`);
  }

