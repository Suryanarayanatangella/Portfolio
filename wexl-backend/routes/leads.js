const express = require('express');
const router = express.Router();
const {
  submitLead,
  getAllLeads,
  testEmail,
} = require('../controllers/leadsController');

// POST /api/leads - Submit new lead
router.post('/', submitLead);

// GET /api/leads - Get all leads (admin)
router.get('/', getAllLeads);

// GET /api/leads/test-email - Test email configuration
router.get('/test-email', testEmail);

module.exports = router;
