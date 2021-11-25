// Import database connector files to access database functionality.
const db = require('../../database/db-connector');

// This handles the read route to view all reviews.
exports.view = (req, res) => {
    const customerIDQuery = `SELECT customerID FROM customers;`;
    db.pool.query(customerIDQuery, (error, identifications, fields) => {
        const productIDQuery = `SELECT productID FROM products;`;
        db.pool.query(productIDQuery, (error, productIdentifications, fields) => {
            const selectQuery = `SELECT * FROM reviews;`;
            db.pool.query(selectQuery, (error, rows, fields) => {
                const obj = { data: rows, customers: identifications, products: productIdentifications };
                res.render('reviews', obj);
            });
        });
    });
};

// This handles the create route to make new reviews.
exports.create = (req, res) => {
    // INSERT query.
    const createQuery = `INSERT INTO reviews (customerID, productID, rating, reviewText, dateWritten) VALUES (?, ?, ?, ?, ?);`;
    // Parameters for query.
    const inserts = [req.body.customerID, req.body.productID, req.body.rating, req.body.reviewText, req.body.dateWritten];
    // Call query.
    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/reviews');
        }
    });
};

// This handles the delete route to delete an existing review.
exports.delete = (req, res) => {
    // DELETE query.
    const deleteQuery = `DELETE FROM reviews WHERE reviewID = ?;`;
    // Parameters for query.
    const inserts = [req.params.id];
    // Call query.
    db.pool.query(deleteQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.write(JSON.stringify(error));
            res.status(400);
            res.end();
        } else {
            res.redirect('/reviews');
        }
    });
};

// This handles the edit viewing when we want to edit one review.
exports.edit = (req, res) => {
    const customerIDQuery = `SELECT customerID FROM customers;`;
    db.pool.query(customerIDQuery, (error, identifications, fields) => {
        const productIDQuery = `SELECT productID FROM products;`;
        db.pool.query(productIDQuery, (error, productIdentifications, fields) => {
            // SELECT query.
            const selectQuery = `SELECT * FROM reviews WHERE reviewID = ?;`;
            // Parameter for query.
            const inserts = [req.params.id];
            // Call query.
            db.pool.query(selectQuery, inserts, (error, rows, fields) => {
                if (error) {
                    console.log(error);
                    res.sendStatus(400);
                } else {
                    const obj = { data: rows, customers: identifications, products: productIdentifications };
                    res.render('editReview', { reviewInfo: obj.data[0], customers: identifications, products: productIdentifications });
                }
            });
        });
    });
};

// This handles the update route to update one review entry.
exports.update = (req, res) => {
    // Destructure the update form input.
    const { customerID, productID, rating, reviewText, dateWritten } = req.body;
    // UPDATE query.
    const updateQuery = `UPDATE reviews SET customerID = ?, productID = ?, rating = ?, reviewText = ?, dateWritten = ? WHERE reviewID = ?`;
    // Parameters for query.
    const inserts = [customerID, productID, rating, reviewText, dateWritten, req.params.id];
    // Call query.
    db.pool.query(updateQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/reviews');
        }
    });
};