const express = require('express');
const router = express.Router();
const { submitContact, getAllEnquiries } = require('../controllers/contactController');

// POST /api/contact - Submit enquiry form
router.post('/contact', submitContact);

// GET /api/enquiries - Get all enquiries (admin)
router.get('/enquiries', getAllEnquiries);

module.exports = router;
