var express = require('express');           // We are using the express library for the web server.
// Import express-handlebars and default layout uses main.handlebars.
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var app = express();                        // We need to instantiate an express object to interact with the server in our code.
PORT = 20301;                               // Set a port number at the top so it's easy to change in the future.

// Enable express to handle JSON data as well as form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine);    // handlebars.engine handles any files with a .handlebars extension.
app.set('view engine', 'handlebars');           // Allows us to omit .handlebars extension.


// Database connection.
var db = require('./database/db-connector');

app.get('/', function (req, res) {

    let query1 = "SELECT * FROM customers;";

    db.pool.query(query1, function (error, rows, fields) {
        res.render('customers', { data: rows });
    });
});

app.post('/addCustomer', function (req, res) {
    // Capture incoming data and parse it back to a JS object.
    let data = req.body;

    let query1 = "INSERT INTO customers (firstName, lastName, email, phoneNumber, address) VALUES (?, ?, ?, ?, ?);";
    let inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.address];

    db.pool.query(query1, inserts, function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.redirect('/');
        }
    });
});


app.listen(PORT, function () {              // This is the basic syntax for the "listener" which receives incoming requests on the specified PORT.
    console.log("Express started on http://localhost:" + PORT + "; press Ctrl-C to terminate.");
});
