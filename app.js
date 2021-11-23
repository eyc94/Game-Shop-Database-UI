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

const homeRoute = require('./server/routes/home');
const customerRoute = require('./server/routes/customer');
app.use('/customers', customerRoute);

app.listen(PORT, function () {              // This is the basic syntax for the "listener" which receives incoming requests on the specified PORT.
    console.log("Express started on http://localhost:" + PORT + "; press Ctrl-C to terminate.");
});
