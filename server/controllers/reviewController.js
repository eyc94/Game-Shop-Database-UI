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