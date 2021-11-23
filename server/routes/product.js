// Import express module.
const express = require('express');
// Create router object from express module.
const router = express.Router();
// Import the controller/logic code for the routes.
const productController = require('../controllers/productController');

// Create.
router.post('/addProduct', productController.create);

// Read.
router.get('/', productController.view);

// Delete.
router.get('/:id', productController.delete);

// Edit and Update.
router.get('/editProduct/:id', productController.edit);
router.post('/editProduct/:id', productController.update);

module.exports = router;