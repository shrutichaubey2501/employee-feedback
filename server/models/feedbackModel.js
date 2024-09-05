// /server/models/feedbackModel.js

module.exports = class Feedback {
    constructor(selfFeedback, employeeFeedback) {
      this.selfFeedback = selfFeedback;
      this.employeeFeedback = employeeFeedback;
    }
  
    // Method to insert feedback data into the database
    insertIntoDB(connection) {
      const selfFeedbackQuery = `
        INSERT INTO FeedbackSchema.SelfFeedback 
        (name, rating, achievements, improvements, work_done, suggestions)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const employeeFeedbackQuery = `
        INSERT INTO FeedbackSchema.EmployeeFeedback 
        (employee_name, rating, appreciate, improvements)
        VALUES (?, ?, ?, ?)
      `;
  
      // Insert self-feedback
      connection.exec(selfFeedbackQuery, [
        this.selfFeedback.name,
        this.selfFeedback.rating,
        this.selfFeedback.achievements,
        this.selfFeedback.improvements,
        this.selfFeedback.workDone,
        this.selfFeedback.suggestions
      ], (err) => {
        if (err) {
          console.error('Error inserting self-feedback', err);
          return;
        }
        console.log('Self-feedback inserted successfully');
  
        // Insert employee feedback
        this.employeeFeedback.forEach((employee) => {
          connection.exec(employeeFeedbackQuery, [
            employee.name,
            employee.rating,
            employee.appreciate,
            employee.improvements
          ], (err) => {
            if (err) {
              console.error('Error inserting employee feedback', err);
              return;
            }
            console.log('Employee feedback inserted successfully');
          });
        });
      });
    }
  };  