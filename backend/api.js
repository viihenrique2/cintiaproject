const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const { Parser } = require('json2csv');

app.use(bodyParser.urlencoded({ extended: true }));

// Mock database
const users = [
    { username: 'Cinthia', password: '1234', isAdmin: true }
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Admin registration endpoint
app.post('/api/admins', (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        res.json({ success: false, message: 'User already exists' });
    } else {
        users.push({ username, password, isAdmin: true });
        res.json({ success: true });
    }
});

// Export to CSV endpoint
app.get('/api/export', (req, res) => {
    const fields = ['username', 'password', 'isAdmin'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(users);

    const filePath = 'cintiamaximus.csv';
    fs.writeFile(filePath, csv, (err) => {
        if (err) {
            console.error('Error writing CSV file:', err);
            res.status(500).send('Error writing CSV file');
        } else {
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', `attachment; filename=${filePath}`);
            res.download(filePath, (err) => {
                if (err) {
                    console.error('Error downloading file:', err);
                } else {
                    sendEmailWithAttachment(filePath);
                }
            });
        }
    });
});

// Function to send email with attachment
function sendEmailWithAttachment(filePath) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com', // Update with the recipient's email
        subject: 'Cinthia Maximus - User Data',
        text: 'Please find the attached user data.',
        attachments: [
            {
                filename: 'cintiamaximus.csv',
                path: filePath
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});