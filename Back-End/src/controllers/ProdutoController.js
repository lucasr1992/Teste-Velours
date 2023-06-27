const ProdutoService = require('../services/ProdutoService');
const MongoService = require('../services/MongoService');

module.exports = {
    buscarTodos: async(req, res) => {
        //--------------------- rota do SQL -------------------------------
        // let json = {error:'', result:[]};
        // let produtos = await ProdutoService.buscarTodosService();

        // for(let i in produtos){
        //     json.result.push({
        //         id: produtos[i].id,
        //         codigo: produtos[i].cod_produto,
        //         descricao:produtos[i].descricao,
        //         valor: produtos[i].valor,
        //         qnt: produtos[i].qnt_estoque
        //     });
        // }
        // res.json(json);
        //--------------------- rota do SQL -------------------------------
        let produtos = await MongoService.buscarTodosServiceMongo();
        res.json(produtos);
    },

    buscarProduto: async(req, res) => {
        //--------------------- rota do SQL -------------------------------
        // let json = {error:'', result:{}};

        // let cod_produto = req.params.cod;
        // let produto = await ProdutoService.buscarProdutoService(cod_produto);
        // if(produto){
        //     json.result=produto;
        // }
        // res.json(json);
        //--------------------- rota do SQL -------------------------------
        const cod = req.params.cod;
        const result = await MongoService.buscarUmServiceMongo(cod);
        res.json(result);
    },

    Criar: async(req, res) => {
        let json = {error:'', result:{}};

        const produto = req.body
        const result = await MongoService.cadastrarServiceMongo(produto);

        let cod_produto = req.body.cod_produto;
        let descricao = req.body.descricao;
        let valor = req.body.valor;
        let qnt_estoque = req.body.qnt_estoque;
        if(cod_produto && descricao && valor && qnt_estoque){
            
            let produto = await ProdutoService.CriarServer(cod_produto, descricao, valor, qnt_estoque);
            json.result={
                produto:
                cod_produto,
                descricao,
                valor,
                qnt_estoque
            };
        }else{
            json.error = 'Informe Todos os Campos';
        }
        res.json(json);
    },

    Alterar: async(req, res) => {
        let json = {error:'', result:{}};
        
        let cod_produto = req.params.cod;
        let descricao = req.body.descricao;
        let valor = req.body.valor;
        let qnt_estoque = req.body.qnt_estoque;

        const result = await MongoService.editarServiceMongo(cod_produto, valor, qnt_estoque)
       
        if(cod_produto && descricao && valor && qnt_estoque){
            await ProdutoService.AlterarService(cod_produto, descricao, valor, qnt_estoque);
            json.result = {
                cod_produto,
                descricao,
                valor,
                qnt_estoque
            };
        }else{
            json.error = 'Informe Valor e Qnt. em Estoque'
        }
        res.json(json);
    },

    Excluir: async(req, res) =>{
        let json = {error:'', result:{}};
        let cod_produto = req.params.cod;

        const result = await MongoService.deletServiceMongo(cod_produto);

        if(cod_produto){
            await ProdutoService.DeleteServer(cod_produto);
            json.result = {
                cod_produto          
            };
        }else{
            json.error = 'Item Não Encontrado'
        }
        res.json(json);
    }
}