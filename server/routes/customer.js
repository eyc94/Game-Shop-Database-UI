const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Create, Read, Update, Delete.
router.get('/', customerController.view);

router.get('/:id', customerController.delete);

module.exports = router;