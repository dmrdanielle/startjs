
var lousa1 = {
    altura: 1.50,
    largura: 2.50,
    cor:  'verde',
    estrutura: 'madeira'
}

var lousa2 = {
    altura: 3.50,
    largura: 5.50,
    cor:  'preto',
    estrutura: 'madeira'
}

var lousa3 = {
    altura: 1.50,
    largura: 2.50,
    cor:  'branca',
    estrutura: 'plastico'
}

var lousas = [ lousa1, lousa2, lousa3 ];

var textoLousas = JSON.stringify(lousas);
//console.log(textoLousas)

/*
for (var indice = 0; indice < lousas.length; indice++) {
    console.log(lousas[indice].cor)
} */

var meusProdutos = []; // Vetor Vazio, meu banco de dados inicial

// Metodo responsavel por inserir dados no vetor
function insereProduto(produto) {
    // Push -> funcao do vetor para inclusao de dados
    meusProdutos.push(produto)
}

function atualizarProduto (posicao, produto) {
    meusProdutos[posicao - 1] = produto;
}


// Saida de dados, imprime a lista de produtos
// aqui outro metodo
function imprimeProdutos() {
    for (var p = 0; p < meusProdutos.length; p++ ) {
        console.log(meusProdutos[p].nome, meusProdutos[p].fabricante)
    }
}

// Invocando o metodo para popular o vetor
for (var i = 1; i < 100; i++) {
    //aqui um objeto
    var produto = { nome: `Cerveja ${i}`, fabricante: 'Skol' }
    insereProduto(produto);    
}

atualizarProduto(8, { nome: 'Macarrao', fabricante: 'Adriana' });

imprimeProdutos();