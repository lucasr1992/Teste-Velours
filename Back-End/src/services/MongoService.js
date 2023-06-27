const db = require('../dbmongo');

async function buscarTodosServiceMongo(){
    const data  = await db.connectMongo();
    return data.collection('produtosmongo').find().toArray();
}

async function buscarUmServiceMongo(cod){
    const data = await db.connectMongo();
    const query = { cod_produto : `${cod}`}
    return data.collection('produtosmongo').findOne(query);
}

async function cadastrarServiceMongo(produto){
    const data = await db.connectMongo();
    return data.collection('produtosmongo').insertOne(produto);
}

async function editarServiceMongo(cod_produto, valor, qnt_estoque){
    const data = await db.connectMongo();
    const query = { cod_produto:  cod_produto }
    return data.collection('produtosmongo').updateOne(query, {$set:{ valor: valor, qnt_estoque: qnt_estoque} })
}

async function deletServiceMongo(cod_produto){
    const data = await db.connectMongo();
    const query = { cod_produto:  `${cod_produto}` }
    return data.collection('produtosmongo').deleteOne(query);
}
      
module.exports = {
    buscarTodosServiceMongo,
    buscarUmServiceMongo,
    cadastrarServiceMongo,
    editarServiceMongo,
    deletServiceMongo
}