const database = require('../database/database');

exports.getProdutos = function(){
    return database.query('select * from produto');
}

exports.getProduto = function(produtoID){
    return database.query('select * from produto where codigo = $1',[produtoID]);
}

exports.deleteProduto = function(produtoID){
    return database.none('delete from produto where codigo= $1',[produtoID]);
}

exports.saveProduto = function(produto){
    return database.one('insert into produto (codigo,nome,descricao,tamanho,preco,foto) values ($1,$2,$3,$4,$5,$6) returning *',
    [produto.codigo,produto.nome,produto.descricao,produto.tamanho,produto.preco,produto.foto])};
