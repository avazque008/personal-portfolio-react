require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS
    }
});

function createMailOptions(name, email, message) {
    return {
        from: process.env.AUTH_MAIL,
        to: process.env.GMAIL,
        subject: `Portfolio - ${name} Wants To Contact You`,
        html: `<h3>By: </h3> <h4> ${name} - ${email} </h4>
               <h3>Message: </h3> <h4> ${message} </h4>`
    }
};

module.exports = { transporter, createMailOptions }