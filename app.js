const express = require('express');
const mysql = require('mysql2');
const app = express();
// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RP738964$',
    database: 'c237_StudentListApp'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
// Set up view engine
app.set('view engine', 'ejs');
// enable static files
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
})); // Middleware to parse URL-encoded bodies
// Define routes
// Example:
// app.get('/', (req, res) => {
// connection.query('SELECT * FROM TABLE', (error, results) => {
// if (error) throw error;
// res.render('index', { results }); // Render HTML page with data
// });
// });
// Define routes
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM students';
    // Fetch data from MySQL
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.send('Error Retrieving students');
        }
        // Render HTML page with data
        res.render('index', { students: results });
    });
});

app.get('/student/:id', (req, res) => {
    // Extract the student ID from the request parameters
    const studentId = req.params.id;
    const sql = 'SELECT * FROM students WHERE studentId = ?';
    // Fetch data from MySQL based on the student ID
    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.send('Error Retrieving student by ID');
        }
        // Check if any student with the given ID was found
        if (results.length > 0) {
            // Render HTML page with the student data
            res.render('student', { student: results[0] });
        } else {
            // If no student with the given ID was found
            res.send('Student not found');
        }
    });
});
app.get('/addStudent', (req, res) => {
    res.render('addStudent');
});
app.get('/addStudent', (req, res) => {
    res.render('addStudent');
});
app.post('/addStudent', (req, res) => {
    // Extract student data from the request body
    const { name, dob, contact, image } = req.body;
    const sql = 'INSERT INTO students (name, dob, contact, image) VALUES (?,?, ?, ?)';
    // Insert the new student into the database
    connection.query(sql, [name, dob, contact, image], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error adding student:", error);
            res.send('Error adding student');
        } else {
            // Send a success response
        res.redirect('/');
    }
});
});

// Show edit form
app.get('/editStudent/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'SELECT * FROM students WHERE studentId = ?';
    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            console.error("Error retrieving student:", error);
            return res.send('Error retrieving student');
        }
        if (results.length > 0) {
            res.render('editStudent', { student: results[0] });
        } else {
            res.send('Student not found');
        }
    });
});

// Handle edit form submission
app.post('/editStudent/:id', (req, res) => {
    const studentId = req.params.id;
    const { name, dob, contact, image } = req.body;
    const sql = 'UPDATE students SET name = ?, dob = ?, contact = ?, image = ? WHERE studentId = ?';
    connection.query(sql, [name, dob, contact, image, studentId], (error) => {
        if (error) {
            console.error("Error updating student:", error);
            return res.send('Error updating student');
        }
        res.redirect('/');
    });
});

app.get('/deleteStudent/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'DELETE FROM students WHERE studentId = ?';
    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error deleting student:", error);
            res.send('Error deleting student');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));