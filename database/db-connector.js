require('dotenv').config();

// Get an instance of mysql we can use in the app.
var mysql = require('mysql');

// Create a "connection pool" using the provided credentials.
// Note: credentials are from environment file.
var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'cs340_chiner'
});

// Export it for use in our application.
module.exports.pool = pool;