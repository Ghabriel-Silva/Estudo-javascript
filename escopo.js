//escopo global
let nome= 'Gabriel';
function saudacao(){
    console.log('ola', nome);
}
saudacao()
//escopo loca
function idade (){
    let idadis = 15;
    console.log(idadis);

};

 idade ()


 //escopo de bloco 


 function exemplo() {
    if (true) {
        let mensagem = 'Olá, mundo!'; // Variável com escopo de bloco

        console.log(mensagem); // Acessa a variável dentro do bloco if
    }

}
exemplo()


//escopo  lexico
function contator(){
    let cont= 0;
    function incrementar(){
        cont++
        console.log(cont)
    }
    return incrementar;
}
 let meucontador = contator();
 meucontador()
 meucontador() 
 meucontador()

 
 
