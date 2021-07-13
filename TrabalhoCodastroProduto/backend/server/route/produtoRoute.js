const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const produtoService = require('../service/produtoService');

router.get('/produtos',async function(req,res){
    const produtos = await produtoService.getProdutos();
    res.json(produtos);
});

router.get("/produto/:id",async function(req,res){
    const produto = await produtoService.getProduto(req.params.id);
    res.json(produto);
 
});

router.delete('/produto/:id',async function(req,res){
    const deleteProduto = await produtoService.deleteProduto(req.params.id);
    return res.json([{message:'registro excluido com sucesso'}]); 
   
});

router.put('/produto',async function(req,res) {
    const produto = req.body;
    const newProduto = await produtoService.saveProduto(produto);
    res.json(newProduto);
});

module.exports =router;