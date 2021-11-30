// Import database connector files.
const db = require('../../database/db-connector');

// This handles the read route to view all the order details.
exports.view = (req, res) => {
    const orderIDQuery = `SELECT orders.orderID, customers.firstName, customers.lastName FROM orders INNER JOIN customers ON orders.customerID = customers.customerID;`;
    db.pool.query(orderIDQuery, (error, orderIdentifications, fields) => {
        const productIDQuery = `SELECT productID, productName FROM products;`;
        db.pool.query(productIDQuery, (error, productIdentifications, fields) => {
            const selectQuery = `SELECT * FROM orderDetails;`;
            db.pool.query(selectQuery, (error, rows, fields) => {
                const obj = { data: rows, orders: orderIdentifications, products: productIdentifications };
                res.render('orderDetails', obj);
            });
        });
    });
};

// This handles the create route to create a new order detail.
exports.create = (req, res) => {
    // INSERT query.
    const createQuery = `INSERT INTO orderDetails (orderID, productID, quantity) VALUES (?, ?, ?);`;
    // Parameters for the query.
    // Notice that our input from the routes file requires TWO user inputs.
    const inserts = [req.body.orderID, req.body.productID, req.body.quantity];
    // Call query.
    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orderDetails');
        }
    });
};

// This handles the delete query to delete an existing order detail.
exports.delete = (req, res) => {
    // DELETE query.
    const deleteQuery = `DELETE FROM orderDetails WHERE orderID = ? AND productID = ?;`;
    // Parameters for the query.
    const inserts = [req.params.orderID, req.params.productID];
    // Call query.
    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else {
            res.redirect('/orderDetails');
        }
    });
};

// This handles the select query to view the details to update an existing order detail.
exports.edit = (req, res) => {
    const orderIDQuery = `SELECT orders.orderID, customers.firstName, customers.lastName FROM orders INNER JOIN customers ON orders.customerID = customers.customerID;`;
    db.pool.query(orderIDQuery, (error, orderIdentifications, fields) => {
        const productIDQuery = `SELECT productID, productName FROM products;`;
        db.pool.query(productIDQuery, (error, productIdentifications, fields) => {
            // SELECT query.
            const selectQuery = `SELECT * FROM orderDetails WHERE orderID = ? AND productID = ?;`;
            // Parameter for query.
            const inserts = [req.params.orderID, req.params.productID];
            // Call query.
            db.pool.query(selectQuery, inserts, (error, rows, fields) => {
                if (error) {
                    console.log(error);
                    res.sendStatus(400);
                } else {
                    const obj = { data: rows, orders: orderIdentifications, products: productIdentifications };
                    res.render('editOrderDetail', { orderDetailInfo: obj.data[0], orders: orderIdentifications, products: productIdentifications });
                }
            });
        });
    });
};

// This handles the update query to update the detail of an existing order detail.
exports.update = (req, res) => {
    // Destructure parameters from the edit form.
    const { orderID, productID, quantity } = req.body;
    // UPDATE query.
    const updateQuery = `UPDATE orderDetails SET orderID = ?, productID = ?, quantity = ? WHERE orderID = ? AND productID = ?;`;
    // Parameters for query.
    const inserts = [orderID, productID, quantity, req.params.orderID, req.params.productID];
    // Call query.
    db.pool.query(updateQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orderDetails');
        }
    });
};