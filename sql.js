const mysql = require("mysql");
  
let connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ''
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS insurance`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);
// Close the connection

connection.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});
connection.end();
  
module.exports = connection;