const repository = require('../repository/produto');

const {sql} = require('@vercel/postgres');

const get = ((req, res) =>{
    const result = sql`SELECT * FROM tb_produto;`;
    res.status(200).json({result})
//    repository.getAll((err, rows) =>{
//        if(err){
//            res.status(500).json(err.message); 
//        }else{
//            rows.length != 0 ? res.status(200).json(rows) : res.status(204).json(rows)
//        }
//    });
});

const getById = ((req, res) =>{
    const produtoId = req.params.id;
    repository.getById(produtoId, (err, rows) =>{
        if(err){
            res.status(500).json(err.message); 
        }else{
            rows.length != 0 ? res.status(200).json(rows) : res.status(204).json(rows)
        }
    });
});

const post = ((req, res) => {
    const produto = req.body;
    repository.post(produto, (err) => {
        if(err) 
            res.status(500).json(err.message); 
        else
            res.status(201).json({result:"ok"});
    });
});

const remove = ((req, res) => {
    const produtoId = req.params.id;
    repository.remove(produtoId, (err) => {
        if(err) 
            res.status(500).json(err.message); 
        else
            res.status(200).json({result:"ok"});
    });
})

const put = ((req, res) => {
    const produto = req.body;
    repository.put(produto, (err) => {
        if(err) 
            res.status(500).json(err.message); 
        else
            res.status(200).json({result:"ok"});
    });
});

module.exports = {
    get,
    getById,
    post,
    remove,
    put
}