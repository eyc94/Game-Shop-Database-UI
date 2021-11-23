const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.view);

router.post('/addProduct', productController.create);

router.get('/:id', productController.delete);

router.get('/editProduct/:id', productController.edit);
router.post('/editProduct/:id', productController.update);

module.exports = router;