// /server/controllers/feedbackController.js

const Feedback = require('../models/feedbackModel');
const { connectToHana } = require('../config/dbConfig');

exports.submitFeedback = async (req, res) => {
  try {
    const connection = await connectToHana();

    const { selfFeedback, employeeFeedback } = req.body;
    const feedback = new Feedback(selfFeedback, employeeFeedback);

    feedback.insertIntoDB(connection);

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error('Error submitting feedback', err);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};
