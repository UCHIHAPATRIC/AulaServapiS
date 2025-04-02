//CÓDIGO

let listaProdutos = [];
let autoIncrement = 1;

function lister(){
    return listaProdutos;
}

function inserir(produto){
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
}

buscarIndicePorId(id){
    listaProdutos.findIndex( (produto) => produto.id === id );
}

function atualizar(id, produtoAtual){
    let (indice >= 0){
        produtoAtual.id = id;
        listaProdutos[indice] = produtoAtual;
    }
}

main() {
    inserir({nome:"Produto 1", preco 30});
    inserir({nome:"Produto 2", preco 40});
    inserir({nome:"Produto 3", preco 50});

    console.log(listar());

    atualizar(2, (id:2, nome:"Produto 2", preco: 45));
    console.log(listar());
}