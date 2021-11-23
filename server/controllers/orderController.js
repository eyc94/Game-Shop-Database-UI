// Import the database files to use to connect to db.
const e = require('express');
const db = require('../../database/db-connector');

exports.view = (req, res) => {
    const selectQuery = `SELECT * FROM orders;`;

    db.pool.query(selectQuery, (error, rows, fields) => {
        const obj = { data: rows };
        res.render('orders', obj);
    });
};

exports.create = (req, res) => {
    const createQuery = `INSERT INTO orders (customerID, orderDate, pickup) VALUES (?, ?, ?);`;
    const inserts = [req.body.customerID, req.body.orderDate, req.body.pickup];

    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/orders');
        }
    });
};

exports.delete = (req, res) => {
    const deleteQuery = `DELETE FROM orders WHERE orderID = ?;`;
    const inserts = [req.params.id];

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

exports.edit = (req, res) => {
    const selectQuery = `SELECT * FROM orders WHERE orderID = ?;`;
    inserts = [req.params.id];

    db.pool.query(selectQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            const obj = { rows };
            res.render('editOrder', obj);
        }
    });
};