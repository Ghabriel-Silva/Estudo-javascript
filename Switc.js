let diaDasemana = 4;
let mensagem;

switch(diaDasemana){
    case 1:
        mensagem = 'segunda feira'
        break;
    case 2:
    mensagem = 'terça-feira';
        break;
    case 3:
        mensagem ='Quarta-feira'
        break;
    default:
        mensagem ='Dia invalido'
}
console.log(mensagem)

let fruta = 'abacaxi';

switch(fruta){
    case 'mação':
    case  'banana':
    case 'laranja':
        console.log('è fruta')
        break;
    case 'abacaxi':
        console.log('è fruta tropical')
        break;
    default:
        console.log("Fruta desconhecida.");
};