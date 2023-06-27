const express = require('express');
const router = express.Router();

const ProdutoController = require('./controllers/ProdutoController');
const MongoController = require('./controllers/MongoController');

//rotas integradas SQL & MongoDB
router.get('/produtos', ProdutoController.buscarTodos);
router.get('/produto/:cod', ProdutoController.buscarProduto);
router.post('/produto/add', ProdutoController.Criar);
router.put('/produtor/editar/:cod', ProdutoController.Alterar);
router.delete('/produto/del/:cod', ProdutoController.Excluir);


//rotas mongoDB
// router.get('/mongo', MongoController.buscarTodos);
// router.get('/mongo/:cod', MongoController.buscarUm);
// router.post('/mongo/cadastrar', MongoController.cadastrar);
// router.put('/mongo/edit/:cod', MongoController.editar);
// router.delete('/mongo/del/:cod', MongoController.excluir);


module.exports = router;