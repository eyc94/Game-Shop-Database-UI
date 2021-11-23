// Import the database files to use to connect to db.
const db = require('../../database/db-connector');

exports.view = (req, res) => {
    const selectQuery = `SELECT * FROM orders;`;

    db.pool.query(selectQuery, (error, rows, fields) => {
        const obs = { data: rows };
        res.render('orders', obj);
    });
};
