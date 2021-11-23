const db = require('../../database/db-connector');


exports.view = (req, res) => {
    let selectQuery = `SELECT * FROM products;`;

    db.pool.query(selectQuery, (errors, rows, fields) => {
        const obj = { data: rows };
        res.render('products', obj);
    })
};