// Import the database files to use to connect to db.
const db = require('../../database/db-connector');

// This handles read route.
exports.view = (req, res) => {
    const customerIDQuery = `SELECT customerID, firstName, lastName FROM customers;`;
    db.pool.query(customerIDQuery, (error, identifications, fields) => {
        // SELECT query.
        const selectQuery = `SELECT * FROM orders;`;
        // Call query.
        db.pool.query(selectQuery, (error, rows, fields) => {
            const obj = { data: rows, customers: identifications };
            res.render('orders', obj);
        });
    });
};

// This handles the route to create an order.
exports.create = (req, res) => {
    // INSERT query.
    const createQuery = `INSERT INTO orders (customerID, orderDate, pickup) VALUES (?, ?, ?);`;
    // Parameters to pass into the call.
    const inserts = [req.body.customerID, req.body.orderDate, req.body.pickup];
    // Call query.
    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orders');
        }
    });
};

// This handles the route to delete an order.
exports.delete = (req, res) => {
    // DELETE query.
    const deleteQuery = `DELETE FROM orders WHERE orderID = ?;`;
    // This is the orderID parameter.
    const inserts = [req.params.id];
    // Call query.
    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else {
            res.redirect('/orders');
        }
    });
};

// This handles the route to lead the user to edit an order.
exports.edit = (req, res) => {

    const customerIDQuery = `SELECT customerID FROM customers;`;
    db.pool.query(customerIDQuery, (error, identifications, fields) => {

        // SELECT query.
        const selectQuery = `SELECT * FROM orders WHERE orderID = ?;`;
        // ID of the order to update.
        inserts = [req.params.id];
        // Call query.
        db.pool.query(selectQuery, inserts, (error, rows, fields) => {
            if (error) {
                console.log(error);
                res.sendStatus(400);
            } else {
                const obj = { data: rows, customers: identifications };
                res.render('editOrder', { orderInfo: obj.data[0], customers: identifications });
            }
        });
    });
};

// This handles the route to update the order after submitting.
exports.update = (req, res) => {
    // Destructure form inputs from user.
    const { customerID, orderDate, pickup } = req.body;
    // UDPATE query.
    const updateQuery = `UPDATE orders
    SET customerID = ?, orderDate = ?, pickup = ?
    WHERE orderID = ?;`;
    // Parameters for the query.
    const inserts = [customerID, orderDate, pickup, req.params.id];
    // Call query.
    db.pool.query(updateQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orders');
        }
    });
};