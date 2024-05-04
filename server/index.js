const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors()); //enables CORS for Express app

// Janet's db
//This section creates a connection pool to the MySQL database.
// const db = mysql.createPool({
// 	connectionLimit : 10,
// 	host : 'localhost',
// 	user : 'root',
// 	password : 'Janet123!', //fill in your password
// 	database : 'test' //fill in the name of your db
// });

// Vanessa's db
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "2015",
  database: "Milestone3",
});

// Employees endpoint
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// Inventory endpoint
app.get("/inventory", (req, res) => {
  db.query("SELECT * FROM inventory", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.send(result);
    }
  });
});

// Vendors endpoint
app.get("/vendors", (req, res) => {
  db.query("SELECT * FROM vendors", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.send(result);
    }
  });
});

// Menus endpoint
app.get("/menus", (req, res) => {
  db.query("SELECT * FROM menus", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.send(result);
    }
  });
});

app.listen(3031, () => {
  console.log("server listening on port 3031");
});
