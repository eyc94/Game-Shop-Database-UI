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

// Add Customer.
exports.create = (req, res) => {
    let createQuery = `INSERT INTO customers (firstName, lastName, email, phoneNumber, address) VALUES (?, ?, ?, ?, ?);`;
    let inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.address];

    // Call the query with the user inputs.
    db.pool.query(createQuery, inserts, function (error, rows, fields) {
        // Check to see if there was an error.
        if (error) {
            // Log error to the terminal so we know what went wrong.
            // Send visitor an HTTP response 400 indicating bad request.
            console.log(error);
            res.sendStatus(400);
        } else {
            // If there was no error, we redirect back to root.
            // This will automatically run the SELECT query to view all customers.
            res.redirect('/customers');
        }
    });
};


// Edit Customer.
exports.edit = (req, res) => {
    let selectQuery = `SELECT * FROM customers WHERE customerID = ?;`;
    let inserts = [req.params.id];

    // Call the query with the user inputs.
    db.pool.query(selectQuery, inserts, function (error, rows, fields) {
        // Check to see if there was an error.
        if (error) {
            // Log error to the terminal so we know what went wrong.
            // Send visitor an HTTP response 400 indicating bad request.
            console.log(error);
            res.sendStatus(400);
        } else {
            // If there was no error, we redirect back to root.
            // This will automatically run the SELECT query to view all customers.
            res.render('editCustomer', { rows });
        }
    });
};

// Update Customer.
exports.update = (req, res) => {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    let updateQuery = `UPDATE customers 
    SET firstName = ?, lastName = ?, email = ?, phoneNumber = ?, address = ?
    WHERE customerID = ?;`;
    let inserts = [firstName, lastName, email, phoneNumber, address, req.params.id];

    // Call the query with the user inputs.
    db.pool.query(updateQuery, inserts, function (error, rows, fields) {
        // Check to see if there was an error.
        if (error) {
            // Log error to the terminal so we know what went wrong.
            // Send visitor an HTTP response 400 indicating bad request.
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/customers');
        }
    });
};