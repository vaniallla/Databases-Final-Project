const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');


app.use(cors()); //enables CORS for Express app

//This section creates a connection pool to the MySQL database.
const db = mysql.createPool({
	connectionLimit : 10,
	host : 'localhost', 
	user : 'root',
	password : 'Janet123!', //fill in your password
	database : 'test' //fill in the name of your db
});

//
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
})

app.listen(3031, () => {
    console.log('server listening on port 3031');
})

