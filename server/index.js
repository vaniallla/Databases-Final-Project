const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Add a new employee endpoint
app.post("/employees", (req, res) => {
  const { name, phone_number, email, hourly_rate } = req.body;

  db.query(
    "INSERT INTO employees (name, phone_number, email, hourly_rate) VALUES (?, ?, ?, ?)",
    [name, phone_number, email, hourly_rate],
    (err, result) => {
      if (err) {
        console.error("Error inserting employee:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Employee added successfully:", result);
        res.status(201).json({ message: "Employee added successfully" });
      }
    }
  );
});

//Add a new inventory endpoint
app.post("/inventory", (req, res) => {
  const { vendor_id, name, quantity, price } = req.body;

  db.query(
    "INSERT INTO inventory (vendor_id, name, quantity, price) VALUES (?, ?, ?, ?)",
    [vendor_id, name, quantity, price],
    (err, result) => {
      if (err) {
        console.error("Error adding inventory item:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Inventory item added successfully:", result);
        res.status(201).json({ message: "Inventory item added successfully" });
      }
    }
  );
});

// Add a new menu endpoint
app.post("/menus", (req, res) => {
  const { name, price, description, image_url } = req.body;

  db.query(
    "INSERT INTO menus (name, price, description, image_url) VALUES (?, ?, ?, ?)",
    [name, price, description, image_url],
    (err, result) => {
      if (err) {
        console.error("Error adding menu item:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Menu item added successfully:", result);
        res.status(201).json({ message: "Menu item added successfully" });
      }
    }
  );
});

//Add a new vendor endpoint
app.post("/vendors", (req, res) => {
  const { name, phone_number, email } = req.body;

  db.query(
    "INSERT INTO vendors (name, phone_number, email) VALUES (?, ?, ?)",
    [name, phone_number, email],
    (err, result) => {
      if (err) {
        console.error("Error adding vendor:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Vendor added successfully:", result);
        res.status(201).json({ message: "Vendor added successfully" });
      }
    }
  );
});

app.listen(3031, () => {
  console.log("server listening on port 3031");
});
