var express = require('express');           // We are using the express library for the web server.
var app = express();                        // We need to instantiate an express object to interact with the server in our code.
PORT = 20301;                               // Set a port number at the top so it's easy to change in the future.

var exphbs = require('express-handlebars')  // Import express-handlebars.
app.engine('.hbs', exphbs({                 // Create an instance of the handlebars engine to process templates.
    extname: ".hbs"
}));
app.set('view engine', '.hbs');             // Tell express to use the handlebars engine whenever it encounters a *.hbs file.


// Database connection.
var db = require('./database/db-connector');

app.get('/', function (req, res) {
    // Define our queries.
    query1 = 'DROP TABLE IF EXISTS diagnostic;';
    query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
    query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!");';
    query4 = 'SELECT * FROM diagnostic;';

    // Execute every query in an asynchronous manner, we want each query to finish before the next one starts.

    // DROP TABLE...
    db.pool.query(query1, function (err, results, fields) {
        console.log(err);
        // CREATE TABLE...
        db.pool.query(query2, function (err, results, fields) {
            console.log(err);
            // INSERT INTO...
            db.pool.query(query3, function (err, results, fields) {
                console.log(err);
                // SELECT *...
                db.pool.query(query4, function (err, results, fields) {
                    console.log(err);
                    // Send the results to the browser.
                    console.log(results);
                    let base = "<h1>MySQL Results:</h1>";
                    res.send(base + JSON.stringify(results));
                });
            });
        });
    });
});


app.listen(PORT, function () {              // This is the basic syntax for the "listener" which receives incoming requests on the specified PORT.
    console.log("Express started on http://localhost:" + PORT + "; press Ctrl-C to terminate.");
});
