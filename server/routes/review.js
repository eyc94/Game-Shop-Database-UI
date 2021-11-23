const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create.
router.post('/addReview', reviewController.create);

// Read.
router.get('/', reviewController.view);

module.exports = router;