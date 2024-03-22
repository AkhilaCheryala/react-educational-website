const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Change this to your desired port

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kiran@507',
    database: 'woj_project' // Your database name
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Middleware for parsing JSON data
app.use(bodyParser.json());

// API endpoint to add enrollment
app.post('/api/addEnrollment', (req, res) => {
    const { name, age, email, mobileNo, gender, course } = req.body;
    const timestamp = new Date().toISOString();

    const sql = 'INSERT INTO enrollments (name, age, email, mobileNo, gender, course, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, age, email, mobileNo, gender, course, timestamp];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding enrollment:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        console.log('Enrollment added successfully');
        res.json({ success: true });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
