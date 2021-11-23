const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController');

// Create.
router.post('/addOrderDetail', orderDetailController.create);

// Read.
router.get('/', orderDetailController.view);

// Delete.
router.get('/:orderID:productID', orderDetailController.delete);

// Edit and Update.
router.get('/editOrderDetail/:orderID:productID', orderDetailController.edit);
router.post('/editOrderDetail/:orderID:productID', orderDetailController.update);

module.exports = router;