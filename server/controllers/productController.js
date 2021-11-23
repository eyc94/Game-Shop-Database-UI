// Import the db connection module to run queries.
const db = require('../../database/db-connector');

// This is the VIEW/READ functionality on the products table.
exports.view = (req, res) => {
    // SELECT query.
    let selectQuery = `SELECT * FROM products;`;
    // Call query.
    db.pool.query(selectQuery, (errors, rows, fields) => {
        const obj = { data: rows };
        res.render('products', obj);
    });
};

// This is the CREATE functionality on the products table.
exports.create = (req, res) => {
    // INSERT query.
    let createQuery = `INSERT INTO products (productName, price, publisher, genre) VALUES (?, ?, ?, ?);`;
    // List of parameters for the ?s.
    let inserts = [req.body.productName, req.body.price, req.body.publisher, req.body.genre];
    // Call query.
    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/products');
        }
    });
};

// This is the DELETE functionality on the products table.
exports.delete = (req, res) => {
    // DELETE query.
    let deleteQuery = `DELETE FROM products WHERE productID = ?;`;
    // Parameters for the ?s.
    let inserts = [req.params.id];
    // Call query.
    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else {
            res.redirect('/products');
        }
    });
};

// This is the EDIT functionality on the products table.
exports.edit = (req, res) => {
    // SELECT query.
    let selectQuery = `SELECT * FROM products WHERE productID = ?;`;
    // Parameters for the ?s.
    let inserts = [req.params.id];
    // Call query.
    // Notice that we are redirecting users to a new page to edit values.
    db.pool.query(selectQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            let obj = { rows };
            res.render('editProduct', obj);
        }
    });
};

// This is the UPDATE functionality on the products table.
exports.update = (req, res) => {
    // Destructure the information we get from updating our table (new values).
    const { productName, price, publisher, genre } = req.body;
    // UPDATE query.
    let updateQuery = `UPDATE products
    SET productName = ?, price = ?, publisher = ?, genre = ?
    WHERE productID = ?;`;
    // List of parameters for the ?s.
    let inserts = [productName, price, publisher, genre, req.params.id];
    // Call query.
    db.pool.query(updateQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/products');
        }
    });
};