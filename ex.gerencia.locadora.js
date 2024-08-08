/**
 * Desafio: Gerenciamento de Videolocadora
Você vai criar um objeto chamado videolocadora que será responsável por gerenciar um inventário de filmes. O objeto deve ter as seguintes propriedades e métodos:

Propriedades:
Nome: O nome da videolocadora.
Endereco: O endereço da videolocadora.
Inventario: Um array que armazenará os filmes disponíveis na videolocadora. Cada filme será um objeto com as seguintes propriedades:
Titulo: O título do filme.
Diretor: O diretor do filme.
Ano: O ano de lançamento do filme.
Disponivel: Um booleano que indica se o filme está disponível para aluguel.
Preco: O preço do aluguel do filme.
Métodos:
AdicionarFilme: Adiciona um novo filme ao inventário.
RemoverFilme: Remove um filme do inventário com base no título.
AtualizarDisponibilidade: Atualiza a disponibilidade de um filme.
AtualizarPreco: Atualiza o preço de aluguel de um filme.
ExibirInventario: Exibe todos os filmes no inventário.
 */

const locadora ={
    Nome: 'Locadora Marechal',
    Endereco: 'Rua manaus 25, SP',
    Inventario: [],


    //Adiciona um objeto  a meu array Inventario
    adicionaFilmes: function(titulo, diretor, ano, quantidade, preco){
        const  novoItem = {
            titulodoFilme: titulo,
            DiretordoFilme:diretor,
            anodoFilme: ano ,
            quantidadedoFilme: quantidade,
            precodoFilme:preco,
        }
        
        this.Inventario.push(novoItem)
    }, 
    //Remover livros do estoqque 
    removerFilme: function(nomedofilme){
        this.Inventario = this.Inventario.filter(item => item.titulodoFilme !== nomedofilme)
    }, 

    //Pesquisa de disponibilidade em estoque 
    disponibilidade: function(nomedoFilmeapesquisar) {
        const item = this.Inventario.find(item => item.titulodoFilme === nomedoFilmeapesquisar);
        
        if (item) {
            if (item.quantidadedoFilme === 0) {
                console.log('Filme indisponível');
            } else {
                console.log(`Filme disponível. Estoque = ${item.quantidadedoFilme}`);
            }
        } else {
            console.log('Filme não encontrado');
        }
    },


    atualizarProduto: function(nomedofilme, quantfilme, precfilm) {
        const item = this.Inventario.find(item => item.titulodoFilme === nomedofilme);
        
        if (item) {
            item.quantidadedoFilme = quantfilme; 
            item.precodoFilme = precfilm;
        } else {
            console.log('Filme não encontrado para atualização');
        }
    },

    
    exibirInventario: function(){
        this.Inventario.forEach(item =>{
            console.log(`Nome do filme: ${item.titulodoFilme},Ano de lançamento: ${item.anodoFilme}, Diretor do filme: ${item.DiretordoFilme}, Quantidade em Estoque: ${item.quantidadedoFilme}, Preço: R$ ${item.precodoFilme.toFixed(2)}`)
        } )
    }




}

//Adicionando filmes 
locadora.adicionaFilmes('O Senhor dos Anéis', 'Peter Jackson', 2001, 0, 9.99);
locadora.adicionaFilmes('Matrix', 'Wachowskis', 1999, 20, 7.99);
locadora.adicionaFilmes('Star Wars', 'George Lucas', 1977,11, 12.99);
locadora.adicionaFilmes('Avatar', 'James Cameron', 2009,0, 14.99);
locadora.adicionaFilmes('ketlin', ' Cameron', 2020, 10 , 14.99)

//atualizar produto
//locadora.atualizarProduto('ketlin',0,100.00)



//locadora.removerFilme('ketlin')

//locadora.disponibilidade('ketlin')

locadora.exibirInventario()