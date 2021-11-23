const db = require('../../database/db-connector');

exports.view = (req, res) => {
    const selectQuery = `SELECT * FROM reviews;`;

    db.pool.query(selectQuery, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            const obj = { data: rows };
            res.render('reviews', obj);
        }
    });
};

exports.create = (req, res) => {
    const createQuery = `INSERT INTO reviews (customerID, productID, rating, reviewText, dateWritten) VALUES (?, ?, ?, ?, ?);`;
    const inserts = [req.body.customerID, req.body.productID, req.body.rating, req.body.reviewText, req.body.dateWritten];

    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/reviews');
        }
    });
};

exports.delete = (req, res) => {
    const deleteQuery = `DELETE FROM reviews WHERE reviewID = ?;`;
    const inserts = [req.params.id];

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