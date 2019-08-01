var mysql = require("mysql");
require('dotenv').config();
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.SECRET_USER,
    password: process.env.SECRET_KEY,
    database: "burgers_db"
});
// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;