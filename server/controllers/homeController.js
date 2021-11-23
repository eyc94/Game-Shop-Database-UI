// Import database connection module in case we need to connect to module.
const db = require('../../database/db-connector');

// View Customers. 
exports.view = (req, res) => {
    // Render the home.hbs handlebars file.
    res.render('home');
};