/*for( let i = 0 ; i<5; i++){
 console.log(i)
}

let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}

let b = 0;
do{
    console.log(b)
    b++
    
}while(b<10)
*/
let numbers = [1,2,3,4,5,6];

numbers.forEach(function(numero){
    console.log('numero', +numero)
})

let  meuNome = ['gabriel', 'joana', 'mateus', 'matias', 'keltin']

meuNome.forEach(function(valorElemntoatual,indiceDoelemento){
    console.log(valorElemntoatual + ':' + indiceDoelemento)
})
