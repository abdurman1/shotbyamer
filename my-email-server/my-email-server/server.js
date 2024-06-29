const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',  
    auth: {
        user: 'aabuoun9@gmail.com',
        pass: '12012001'
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: email,
        to: 'aabuoun9@gmail.com',
        subject: `New Inquiry from ${name}`,
        text: `You have received a new inquiry from:
        Name: ${name}
        Email: ${email}
        Message: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email successfully sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


