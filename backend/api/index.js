const {sql} = require('@vercel/postgres');

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = 3001

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const produtoRouter = require('./routes/produto');

app.use('/produtos', produtoRouter);
  
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

try {
  console.log(sql)
  const result =
    sql`CREATE TABLE IF NOT EXISTS tb_produto ( id SERIAL, nome varchar(255), preco DECIMAL(3,2), observacao varchar(255), img varchar(255) );`;
  console.log(result)
} catch (error) {
  console.log(error)
}

module.exports = app;