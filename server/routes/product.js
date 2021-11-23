const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.view);

router.post('/addProduct', productController.create);

router.get('/:id', productController.delete);

module.exports = router;