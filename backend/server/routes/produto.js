const express = require('express')
const router = express.Router();
const produtoController = require('../controller/produto');
//const authController = require('../controller/authentication');

router.get('/', produtoController.get);
router.get('/:id', produtoController.getById);
router.post('/', produtoController.post);
router.delete('/:id', produtoController.remove);
router.put('/', produtoController.put);

module.exports = router;