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

// Delete Customer.
exports.delete = (req, res) => {
    let deleteQuery = `DELETE FROM customers WHERE customerID = ?;`;
    let inserts = [req.params.id];

    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else {
            res.redirect('/customers');
        }
    });
};