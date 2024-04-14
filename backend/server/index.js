const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = 3000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const produtoRouter = require('./routes/produto');

app.use('/produtos', produtoRouter);
  
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

module.exports = app;