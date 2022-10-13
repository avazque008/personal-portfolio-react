require('dotenv').config();

function createMailOptions(name, email, message) {
    return {
        from: process.env.AUTH_MAIL,
        to: process.env.GMAIL,
        subject: `Portfolio - ${name} Wants To Contact You`,
        html: `<h3>By: </h3> <h4> ${name} - ${email} </h4>
               <h3>Message: </h3> <h4> ${message} </h4>`
    }
};

module.exports = { createMailOptions }