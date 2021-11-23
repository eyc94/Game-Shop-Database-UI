const e = require('express');
const db = require('../../database/db-connector');

exports.view = (req, res) => {
    let selectQuery = `SELECT * FROM products;`;

    db.pool.query(selectQuery, (errors, rows, fields) => {
        const obj = { data: rows };
        res.render('products', obj);
    })
};

exports.create = (req, res) => {
    let createQuery = `INSERT INTO products (productName, price, publisher, genre) VALUES (?, ?, ?, ?);`;
    let inserts = [req.body.productName, req.body.price, req.body.publisher, req.body.genre];

    db.pool.query(createQuery, inserts, (error, rows, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/products');
        }
    });
};

exports.delete = (req, res) => {
    let deleteQuery = `DELETE FROM products WHERE productID = ?;`;
    let inserts = [req.params.id];

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