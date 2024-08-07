const biblioteca = {
    Loja: 'Biblioteca de Marechal',
    Endereco: 'R. Sergipe, 625 - Centro, Mal. Cândido Rondon - PR, 85960-000', 
    Inventario: [],


    AdicionarItem: function(Nome, Autor, EmEstoque, Preco){
        const NovoLivro = {
            Nome: Nome,
            Autor: Autor,
            EmEstoque: EmEstoque,
            Preco: Preco
        }
        this.Inventario.push(NovoLivro)
    },


    RemoveItem: function(Nome){
        this.Inventario = this.Inventario.filter(item => item.Nome !== Nome)
    }, 


    AtualizaItem: function(Nome,Quantidade, Preco){
      const item = this.Inventario.find(item => item.Nome === Nome)
        if(item){
            item.EmEstoque = Quantidade;
            item.Preco =  Preco;
        }
    },
     ExibirBiblioteca: function (){
        this.Inventario.forEach(item =>{
            console.log(`Nome do livro: ${item.Nome}, Autor: ${item.Autor}, Quantidade em Estoque: ${item.EmEstoque}, Preço: R$ ${item.Preco.toFixed(2)}`)
        })
     }
} 

biblioteca.AdicionarItem('O Alquimista', 'Paulo Coelho', 12, 29.90);
biblioteca.AdicionarItem('1984', 'George Orwell', 8, 19.80);
biblioteca.AdicionarItem('Dom Casmurro', 'Machado de Assis', 15, 22.50);

biblioteca.AtualizaItem('O Alquimista',22,25.99)
//biblioteca.RemoveItem('1984')



biblioteca.ExibirBiblioteca()


