const MongoService = require('../services/MongoService')

module.exports = {
    buscarTodos: async(req, res) => {
        let produtos = await MongoService.buscarTodosServiceMongo();
        res.json(produtos);
    },

    buscarUm: async(req, res)=>{
        const cod = req.params.cod;
        const result = await MongoService.buscarUmServiceMongo(cod);
        res.json(result);
    },

    cadastrar: async (req, res) =>{
        const produto = req.body
        const result = await MongoService.cadastrarServiceMongo(produto);
        res.json(result);
    },

    editar: async(req, res) => {
       const cod_produto = req.params.cod;
       const valor = req.body.valor;
       const qnt_estoque = req.body.qnt_estoque;
       const result = await MongoService.editarServiceMongo(cod_produto, valor, qnt_estoque)
       res.json(result);
    },

    excluir: async(req, res) =>{
        const cod_produto = req.params.cod;
        const result = await MongoService.deletServiceMongo(cod_produto);
        res.json(result);
        
    }




}