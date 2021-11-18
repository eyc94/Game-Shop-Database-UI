var express = require('express');           // We are using the express library for the web server.
var app = express();                        // We need to instantiate an express object to interact with the server in our code.
PORT = 20301;                               // Set a port number at the top so it's easy to change in the future.


// Database connection.
var db = require('./database/db-connector');

app.get('/', function (req, res) {          // Basic syntax for a route.
    res.send("The server is running!");     // This function sends the string "The server is running!" to the computer requesting the web site.
});


app.listen(PORT, function () {              // This is the basic syntax for the "listener" which receives incoming requests on the specified PORT.
    console.log("Express started on http://localhost:" + PORT + "; press Ctrl-C to terminate.");
});
