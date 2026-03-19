const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email transporter ready to send messages');
  }
});

module.exports = transporter;
