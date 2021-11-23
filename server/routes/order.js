const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create.
router.post('/addOrder', orderController.create);

// Read.
router.get('/', orderController.view);

module.exports = router;