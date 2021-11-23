const db = require('../../database/db-connector');


exports.view = (req, res) => {
    const selectQuery = `SELECT * FROM orderDetails;`;

    db.pool.query(selectQuery, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            const obj = { data: rows };
            res.render('orderDetails', obj);
        }
    });
};

exports.create = (req, res) => {
    const createQuery = `INSERT INTO orderDetails (orderID, productID, quantity) VALUES (?, ?, ?);`;
    const inserts = [req.body.orderID, req.body.productID, req.body.quantity];

    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orderDetails');
        }
    });
};

exports.delete = (req, res) => {
    const deleteQuery = `DELETE FROM orderDetails WHERE orderID = ? AND productID = ?;`;
    const inserts = [req.params.orderID, req.params.productID];

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

exports.edit = (req, res) => {
    const selectQuery = `SELECT * FROM orderDetails WHERE orderID = ? AND productID = ?;`;
    const inserts = [req.params.orderID, req.params.productID];

    db.pool.query(selectQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            const obj = { rows };
            res.render('editOrderDetail', obj);
        }
    });
};