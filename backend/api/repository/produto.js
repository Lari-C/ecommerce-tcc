//const db = require('../database/conection');

const {sql} = require('@vercel/postgres');

async function getAll() {
    result = await sql`SELECT * FROM tb_produto;`;
    console.log(result)
    return result;
}

const getById = (id, callback) => {
    // const query = 
    // SELECT nome, preco, observacao, img FROM tb_produto WHERE id = '${id}';
    // db.all(query, [], callback);
}

const post = (produto, callback) => {
    // const sql = INSERT INTO tb_produto (nome, preco, observacao, img) VALUES (?, ?, ?, ?);
    // db.run(sql, [produto.nome, produto.preco, produto.observacao, produto.img], (err) =>{
    //     callback(err);
    // });
}

const remove = (id, callback) => {
    // const sql = DELETE FROM tb_produto WHERE id = ?;
    // db.run(sql, id, (err) =>{
    //     callback(err);
    // }); 
}

const put = (produto, callback) => {
    // const sql = UPDATE tb_produto SET nome = ?, preco = ?, observacao = ?, img = ? WHERE id = ?;
    // db.run(sql, [produto.nome, produto.preco, produto.observacao, produto.img, produto.id], (err) =>{
    //     callback(err);
    // });
}

module.exports = {
    getAll,
    getById,
    post,
    remove,
    put
}