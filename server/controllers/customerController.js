const mysql = require('mysql');

// View Customers. 
exports.view = (req, res) => {
    // GET route for our root. Just display all customers.
    let query1 = "SELECT * FROM customers;";
    res.render('customers');
};


// router.get('/', function (req, res) {
//     let query1 = "SELECT * FROM customers;";



//     db.pool.query(query1, function (error, rows, fields) {
//         res.render('customers', { data: rows });
//     });
// });