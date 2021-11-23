const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Create, Read, Update, Delete.
router.get('/', customerController.view);

router.get('/:id', customerController.delete);


// Create a customer.
router.post('/addCustomer', customerController.create);




router.get('/editCustomer/:id', customerController.edit);
router.post('/editCustomer/:id', customerController.update);

module.exports = router;