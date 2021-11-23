// Import express module.
const express = require('express');
// Create router object from Router() function.
const router = express.Router();
// Import the controller/logic for the home route.
const homeController = require('../controllers/homeController');

// GET route for the home page.
router.get('/', homeController.view);

// Export the object to use in app.js.
module.exports = router;