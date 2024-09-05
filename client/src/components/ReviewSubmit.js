import React from 'react';
import axios from 'axios';

function ReviewSubmit({ formData, prevStep, handleSubmit }) {
  const submitFeedback = async () => {
    try {
      const response = await axios.post('http://localhost:3001/submit-feedback', formData);
      if (response.status === 200) {
        alert('Feedback submitted successfully!');
        handleSubmit(); // Call handleSubmit to possibly reset the form or navigate away
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="review-submit">
      <h3>Review and Submit</h3>
      <h4>Self Feedback</h4>
      <p>Name: {formData.selfFeedback.name}</p>
      <p>Rating: {formData.selfFeedback.rating}</p>
      <p>Achievements: {formData.selfFeedback.achievements}</p>
      <p>Improvements: {formData.selfFeedback.improvements}</p>
      <p>Work Done: {formData.selfFeedback.workDone}</p>
      <p>Suggestions: {formData.selfFeedback.suggestions}</p>

      <h4>Employee Feedback</h4>
      {formData.employeeFeedback.map((employee, index) => (
        <div key={index}>
          <h5>Employee {index + 1}</h5>
          <p>Name: {employee.name}</p>
          <p>Rating: {employee.rating}</p>
          <p>Appreciate: {employee.appreciate}</p>
          <p>Improvements: {employee.improvements}</p>
        </div>
      ))}

      <button type="button" onClick={prevStep}>Previous</button>
      <button type="button" onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default ReviewSubmit;
