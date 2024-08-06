
const loja = {
    nome: 'magazine',
    endereco: 'Rua bahia 3284',
    inventario: [],


    adicionarItem: function(nome, quantidade, preco){ // adciona um item no meu array inventario 
        const novoItem = {
            nome: nome,
            quantidade: quantidade,
            preco
        }
        this.inventario.push(novoItem)
    },
    
    removerItem: function(nome){
        this.inventario = this.inventario.filter(item => item.nome !== nome)

    },
    atualizarQuantidade: function(nome, novaQuantidade){
        const it = this.inventario.find(it => it.nome === nome)
        if(it){
            it.quantidade = novaQuantidade
        }
    }, 

    exibirEnventario: function(){
        this.inventario.forEach(intem =>{
            console.log(`Nome: ${intem.nome}, Quantidade: ${intem.quantidade}, Preço: R$ ${intem.preco.toFixed(2)}`)
        })
    }
}
  



loja.adicionarItem("Caneta", 100, 1.50);
loja.adicionarItem("tinta", 30, 5.50);
loja.adicionarItem("boracha", 10, 2.50);

console.log("Inventário antes de atualizar quantidade:");

loja.exibirEnventario()



//Atualização do inventario 
loja.atualizarQuantidade("Caneta", 200);

console.log(loja.removerItem('Caneta'))

//Atualização
loja.exibirEnventario()


/**
 * minha função callback  intera para cada item  do meu array e que dentro desse array tem obejtos com propiedas quando falo que intem  é  o objeto dentro do array, ou seja tenho 3 objetos dentro do array, quando digo item.nome estou falando da propiedade que esta dentro do objeto criado seria isto 
 */