const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors middleware
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Enable CORS for requests from your React frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed HTTP methods
  credentials: true  // Enable credentials (cookies, HTTP authentication)
}));

// Routes
app.use('/', feedbackRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
