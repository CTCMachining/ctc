const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, email, tel, inquiry } = req.body;
    // Validation logic here

    // Create a Nodemailer transporter using Ethereal
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'una53@ethereal.email',  // Replace with your Ethereal email
            pass: 'xTqScM5nbfW5rtKTeF'                // Replace with your Ethereal password
        }
    });

    // Setup email data
    let mailOptions = {
        from: '"Test Server" <your.email@example.com>', // Sender address
        to: 'recipient@example.com',                    // List of recipients
        subject: 'New Inquiry',                          // Subject line
        text: `New inquiry from ${firstName} ${lastName} (${email} - ${tel}): ${inquiry}`, // Plain text body
        html: `<p>New inquiry from ${firstName} ${lastName} (${email} - ${tel}): ${inquiry}</p>` // HTML body
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.send('Inquiry sent successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
