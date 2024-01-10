require('dotenv').config();
import express from 'express';
import { urlencoded } from 'body-parser';
import { createTransport, getTestMessageUrl } from 'nodemailer';

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailHost = process.env.EMAIL_HOST;
const emailPort = process.env.EMAIL_PORT;
const appPort = process.env.APP_PORT || 3000;

const app = express();
app.use(urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, email, tel, inquiry } = req.body;
    // Validation logic here

    let transporter = createTransport({
        host: emailHost,
        port: emailPort,
        auth: {
            user: emailUser,
            pass: emailPass
        }
    });

    let mailOptions = {
        from: '"Test Server" <your.email@example.com>',
        to: 'recipient@example.com',
        subject: 'New Inquiry',
        text: `New inquiry from ${firstName} ${lastName} (${email} - ${tel}): ${inquiry}`,
        html: `<p>New inquiry from ${firstName} ${lastName} (${email} - ${tel}): ${inquiry}</p>`
    };

    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(info));

    res.send('Inquiry sent successfully!');
});

app.listen(appPort, () => {
    console.log(`Server running on port ${appPort}`);
});

/* TODO
Switch to a Real Email Service:
Replace Ethereal with a production-ready SMTP service like Gmail, SendGrid, Amazon SES, etc.
Update your Nodemailer configuration to use the SMTP settings provided by your chosen email service. 
This includes updating the host, port, and authentication details in your transporter configuration.
*/
