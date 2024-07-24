// Verificação de acesso 
// 1 ter 18 anos ou mais 
// a pessoa tem que ter carteira 

let Idade = 19;
let temCarteira = true ;

function verificaAcesso (a,b){
     if( a>=18 && b == true ){
        console.log(`pode dirigir`)
     }
     else{
        console.log(`não pode dirigir`)
     }
}

verificaAcesso(Idade, temCarteira)

//Controle de estoque
//Função 2 parametros -> c,d se c<d-não pode ser atendido, se d<c-pode ser atendida

let quantidaemEstoque = 1000;
let quantidadeSolicitada = 2000;


function controleEstoque (C,D){
    let pedidorestante = C-D;
     if(C>=D){
        console.log(`pedido feito, Quantidade do pedido = ${D}, tem em estoque ${pedidorestante}`)  
     }
     else{
        console.log(`pedido não pode ser feito}`)  
     }
     
}
controleEstoque(quantidaemEstoque, quantidadeSolicitada)



//Validação de login 

const usuario = 'Gabriel'
const senha = '123'
if(senha.length>=4){
    validarLogin(usuario, senha)
}
else{
    console.log(`Sua senha deve ter no minimo 4 caracteres`)
}

function validarLogin(usuario, senha){
 
    if(usuario  && senha ){
        console.log(`Login validado`)
    }
    else{
        console.log(`Login invalidado`)
    }
}
