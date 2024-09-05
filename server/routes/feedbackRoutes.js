// /server/routes/feedbackRoutes.js

const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackController');

// POST route to submit feedback
router.post('/submit-feedback', submitFeedback);

module.exports = router;
