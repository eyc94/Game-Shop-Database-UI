// We are using the express library for the web server.
var express = require('express');
// Import express-handlebars.
const exphbs = require('express-handlebars');
// Import body-parser middleware.
const bodyParser = require('body-parser');

// We need to instantiate an express object to interact with the server in our code.
var app = express();
// Set a port number at the top so it's easy to change in the future.
PORT = 20301;

// Parsing middleware.
// Parse application/x-www-form-urlendcoded.
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json.
app.use(bodyParser.json());

// Static files.
app.use(express.static('public'));

// Templating engine.
const handlebars = exphbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Enable express to handle JSON data as well as form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection.
var db = require('./database/db-connector');



const routes = require('./server/routes/customer');
app.use('/customers', routes);





// POST route to handle adding customers.
app.post('/addCustomer', function (req, res) {
    // Capture incoming data and parse it back to a JS object.
    let data = req.body;

    // Create a query with allowed user input.
    let query1 = "INSERT INTO customers (firstName, lastName, email, phoneNumber, address) VALUES (?, ?, ?, ?, ?);";
    // User input is stored here to put into query to replace '?'.
    let inserts = [req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.address];

    // Call the query with the user inputs.
    db.pool.query(query1, inserts, function (error, rows, fields) {
        // Check to see if there was an error.
        if (error) {
            // Log error to the terminal so we know what went wrong.
            // Send visitor an HTTP response 400 indicating bad request.
            console.log(error);
            res.sendStatus(400);
        } else {
            // If there was no error, we redirect back to root.
            // This will automatically run the SELECT query to view all customers.
            res.redirect('/');
        }
    });
});

app.listen(PORT, function () {              // This is the basic syntax for the "listener" which receives incoming requests on the specified PORT.
    console.log("Express started on http://localhost:" + PORT + "; press Ctrl-C to terminate.");
});
