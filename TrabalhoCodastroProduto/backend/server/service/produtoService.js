const produtoData = require('../data/produtoData');


exports.getProdutos = function(){
    return produtoData.getProdutos();
}
exports.getProduto = function(produtoID){
    return produtoData.getProduto(produtoID);
}
exports.deleteProduto = function(produtoID){
    return produtoData.deleteProduto(produtoID);
}
exports.saveProduto= function(produto){
    return produtoData.saveProduto(produto);
}