const express = require('express');
const path = require('path');
const { createMailOptions } = require('./utils/mail');
const PORT = process.env.PORT || 3001;
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS
    }
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    try {
        transporter.sendMail(createMailOptions(name, email, message), (err, info) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    message: 'Email Was Sent Successfully!'
                })
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});