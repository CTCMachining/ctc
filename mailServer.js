require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailHost = process.env.EMAIL_HOST;
const emailPort = process.env.EMAIL_PORT;
const appPort = process.env.APP_PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, email, tel, inquiry } = req.body;
    // Validation logic here

    let transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        auth: {
            user: emailUser,
            pass: emailPass
        }
    });

    let mailOptions = {
        from: email,
        to: emailUser ,
        subject: 'New Inquiry from ' + firstName + ' ' + lastName + ', ' + email,
        text:'_Customer Information:_\n' +
        'Name: ' + firstName + ' ' + lastName + '\n' +
        'Email: ' + email + '\n' +
        'Tel: ' + tel + '\n' + '\n' +
        '_Description of Inquiry:_ ' + '\n' + inquiry,
        html: '<p><strong><u>Customer Information:</u></strong><br>' +
      '<strong>Name:</strong> ' + firstName + ' ' + lastName + '<br>' +
      '<strong>Email:</strong> ' + email + '<br>' +
      '<strong>Tel:</strong> ' + tel + '</p>' +
      '<p><strong><u>Description of Inquiry:</u></strong><br>' + inquiry + '</p>',

    };

    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.send('Inquiry sent successfully!');
});

app.listen(appPort, () => {
    console.log(`Server running on port ${appPort}`);
});
