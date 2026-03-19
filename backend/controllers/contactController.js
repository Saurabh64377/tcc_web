const { pool } = require('../config/db');
const transporter = require('../config/email');
require('dotenv').config();

// Validate enquiry input
const validateInput = ({ name, phone, classLevel, subject, message ,address }) => {
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!phone || !/^[0-9]{10}$/.test(phone.trim())) {
    errors.push('Phone number must be a valid 10-digit number');
  }

  if (!classLevel || classLevel.trim() === '') {
    errors.push('Class is required');
  }

  if (!subject || subject.trim() === '') {
    errors.push('Subject is required');
  }
  if (!address || address.trim().length < 10) {
    errors.push('Address must be at least 10 characters long');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

// Save enquiry to DB
const saveEnquiry = async ({ name, phone, classLevel, subject, message , address }) => {
  const query = `
    INSERT INTO enquiries (name, phone, class, subject, message , address)
    VALUES (?, ?, ?, ?, ?,?)
  `;
  const [result] = await pool.execute(query, [
    name.trim(),
    phone.trim(),
    classLevel.trim(),
    subject.trim(),
    message.trim(),
    address.trim()
  ]);
  return result.insertId;
};

// Send notification email
const sendEmail = async ({ name, phone, classLevel, subject, message , address }) => {
  const mailOptions = {
    from: `"Target Coaching Classes" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL || 'vishalverma@gmail.com',
    subject: `📩 New Enquiry from ${name} - Target Coaching Classes`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1a237e, #283593); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🎯 Target Coaching Classes</h1>
          <p style="color: #c5cae9; margin: 8px 0 0 0;">New Student Enquiry</p>
        </div>
        
        <div style="padding: 30px; background: #ffffff;">
          <h2 style="color: #1a237e; border-bottom: 2px solid #e8eaf6; padding-bottom: 10px;">Enquiry Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f5f5f5;">
              <td style="padding: 12px 15px; font-weight: bold; color: #555; width: 35%; border-radius: 4px 0 0 4px;">👤 Student Name</td>
              <td style="padding: 12px 15px; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; font-weight: bold; color: #555;">📞 Phone Number</td>
              <td style="padding: 12px 15px; color: #333;">${phone}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 12px 15px; font-weight: bold; color: #555;">🏫 Class</td>
              <td style="padding: 12px 15px; color: #333;">${classLevel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; font-weight: bold; color: #555;">📚 Subject</td>
              <td style="padding: 12px 15px; color: #333;">${subject}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 12px 15px; font-weight: bold; color: #555; vertical-align: top;">📍 Address</td>
              <td style="padding: 12px 15px; color: #333;">${address}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 12px 15px; font-weight: bold; color: #555; vertical-align: top;">💬 Message</td>
              <td style="padding: 12px 15px; color: #333;">${message}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #e8eaf6; padding: 20px; text-align: center;">
          <p style="color: #666; margin: 0; font-size: 13px;">
            This enquiry was submitted via the Target Coaching Classes website.<br>
            <strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
  console.log(`📧 Email sent successfully to ${mailOptions.to}`);
};

// Main contact controller
const submitContact = async (req, res) => {
  try {
    const { name, phone, classLevel, subject, message , address } = req.body;



    // Validate input
    const errors = validateInput({ name, phone, classLevel, subject, message ,address});
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Save to database
    const insertId = await saveEnquiry({ name, phone, classLevel, subject, message , address });
   

    // Send email notification
    try {
      await sendEmail({ name, phone, classLevel, subject, message , address });
    } catch (emailError) {
      console.error('⚠️ Email sending failed (enquiry still saved):', emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully! We will contact you soon.',
      id: insertId
    });

  } catch (error) {
    console.error('❌ Contact submission error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
};

// Get all enquiries (optional admin view)
const getAllEnquiries = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM enquiries ORDER BY created_at DESC'
    );
    return res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Get enquiries error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to fetch enquiries' });
  }
};

module.exports = { submitContact, getAllEnquiries };
