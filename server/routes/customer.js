// Import the express module.
const express = require('express');
// Create the router object from the Router() function.
const router = express.Router();
// Import the controller/logic of the route.
const customerController = require('../controllers/customerController');

// View customers.
router.get('/', customerController.view);

// Search a customer.
router.post('/', customerController.find);

// Delete a customer.
router.get('/:id', customerController.delete);

// Create a customer.
router.post('/addCustomer', customerController.create);

// Edit and Update a customer.
router.get('/editCustomer/:id', customerController.edit);
router.post('/editCustomer/:id', customerController.update);

// Export the router object to use outside of this module.
module.exports = router;