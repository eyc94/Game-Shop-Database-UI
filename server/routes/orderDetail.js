const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController');

// Create.
router.post('/addOrderDetail', orderDetailController.create);

// Read.
router.get('/', orderDetailController.view);

module.exports = router;