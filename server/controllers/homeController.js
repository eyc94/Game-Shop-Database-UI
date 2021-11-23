const db = require('../../database/db-connector');

// View Customers. 
exports.view = (req, res) => {
    res.render('home');

};