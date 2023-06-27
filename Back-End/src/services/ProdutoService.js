const db = require('../db');

module.exports ={
    buscarTodosService: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM produtos', (error, results) => {
                if(error){ reject(error); return;}
                resolve(results);
            });
        });
    },

    buscarProdutoService:(cod_produto) => {
        return new Promise((resolve, reject) => {
            db. query('SELECT * FROM produtos WHERE cod_produto = ?', [cod_produto], (error, result) => {
                if(error){ reject(error); return;}
                if(result.length > 0){
                    resolve(result[0])
                }else{
                    resolve(false)
                }
            });
        });
    },

    CriarServer:(cod_produto, descricao, valor, qnt_estoque) => {
        return new Promise((resolve, reject) => {
            db. query(
                'INSERT INTO produtos (cod_produto, descricao, valor, qnt_estoque) VALUES(?, ?, ?, ?) ',
                 [cod_produto, descricao, valor, qnt_estoque], (error, result) => {
                if(error){ reject(error); return;}
                resolve(result);    
            });
        });
    },

    AlterarService:(cod_produto, descricao, valor, qnt_estoque) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE produtos SET descricao = ?, valor = ?, qnt_estoque = ? WHERE cod_produto = ?`,
                [descricao, valor, qnt_estoque, cod_produto],
                (error, result) =>{
             
                    resolve(result)
                }
            );
        })
    },

    DeleteServer:(cod_produto) =>{
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM produtos WHERE cod_produto = ?',
                [cod_produto],
                (error, result)=>{
                    if(error){reject(error); return;}
                    resolve(result);
                }
            );
        })
    }
};