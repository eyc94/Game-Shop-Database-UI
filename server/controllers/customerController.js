const mysql = require('mysql');
const db = require('../../database/db-connector');

// View Customers. 
exports.view = (req, res) => {
    // GET route for our root. Just display all customers.
    let query1 = "SELECT * FROM customers;";
    db.pool.query(query1, function (error, rows, fields) {
        res.render('customers', { data: rows });
    });
};