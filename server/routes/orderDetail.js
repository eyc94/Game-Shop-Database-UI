const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController');

// Create.
router.post('/addOrderDetail', orderDetailController.create);

// Read.
router.get('/', orderDetailController.view);

// Delete.
router.get('/:orderID:productID', orderDetailController.delete);

module.exports = router;