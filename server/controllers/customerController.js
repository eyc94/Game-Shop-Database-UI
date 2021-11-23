// Import the database connector file to perform queries.
const db = require('../../database/db-connector');

// View Customers.
exports.view = (req, res) => {
    // SELECT query.
    let selectQuery = "SELECT * FROM customers;";
    // Call query.
    db.pool.query(selectQuery, function (error, rows, fields) {
        const obj = { data: rows };
        res.render('customers', obj);
    });
};

// Delete Customer.
exports.delete = (req, res) => {
    // DELETE query.
    let deleteQuery = `DELETE FROM customers WHERE customerID = ?;`;
    // The id parameter to delete a row from customers table.
    let inserts = [req.params.id];

    // Call query to delete.
    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) { // Log error if error.
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else { // Otherwise, redirect to customers page.
            res.redirect('/customers');
        }
    });
};

// Add Customer.
exports.create = (req, res) => {
    // INSERT query.
    let createQuery = `INSERT INTO customers (firstName, lastName, email, phoneNumber, address) VALUES (?, ?, ?, ?, ?);`;
    // Required parameters IN ORDER for the INSERT query.
    let inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.address];
    // Call the query with the user inputs.
    db.pool.query(createQuery, inserts, function (error, rows, fields) {
        if (error) { // Log error if error.
            console.log(error);
            res.sendStatus(400);
        } else {
            // If there was no error, we redirect back to customers.
            res.redirect('/customers');
        }
    });
};

// Edit Customer.
exports.edit = (req, res) => {
    // SELECT query.
    let selectQuery = `SELECT * FROM customers WHERE customerID = ?;`;
    // Use ID as parameter.
    let inserts = [req.params.id];
    // Call the query with the user inputs.
    db.pool.query(selectQuery, inserts, function (error, rows, fields) {
        if (error) { // Log error if error.
            console.log(error);
            res.sendStatus(400);
        } else {
            // Render the editCustomer.hbs page with the input passed as an object.
            let obj = { rows };
            res.render('editCustomer', obj);
        }
    });
};

// Update Customer.
exports.update = (req, res) => {
    // Retrieve new values from the req.body and destructure them.
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    // Update query.
    let updateQuery = `UPDATE customers 
    SET firstName = ?, lastName = ?, email = ?, phoneNumber = ?, address = ?
    WHERE customerID = ?;`;
    // Parameters for the UPDATE query in the correct order.
    let inserts = [firstName, lastName, email, phoneNumber, address, req.params.id];

    // Call the query with the user inputs.
    db.pool.query(updateQuery, inserts, function (error, rows, fields) {
        // Check to see if there was an error.
        if (error) { // If error log error.
            console.log(error);
            res.sendStatus(400);
        } else {
            // Redirect to customers page.
            res.redirect('/customers');
        }
    });
};