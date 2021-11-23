const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create.
router.post('/addOrder', orderController.create);

// Read.
router.get('/', orderController.view);

// Delete.
router.get('/:id', orderController.delete);

module.exports = router;