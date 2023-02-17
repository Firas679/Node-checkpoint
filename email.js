var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'firas679@gmail.com',
    pass: 'kfij fhru vbfd rfrt'
  }
});

var mailOptions = {
  from: 'firas679@gmail.com',
  to: 'pc679@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was NOT easy!'
};
