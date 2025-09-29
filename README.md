# Employee Feedback Management System

A comprehensive full-stack web application designed to collect, manage, and analyze employee feedback within organizations. This system provides an intuitive interface for employees to submit feedback and enables administrators to track and analyze feedback data effectively.

## 🚀 Features

- **User-Friendly Interface**: Modern React-based frontend with Material-UI components
- **Feedback Collection**: Streamlined feedback submission process for employees
- **Real-time Data**: Live feedback updates and management
- **Enterprise Database**: SAP HANA database integration for robust data storage
- **Cross-Platform**: Responsive design that works on desktop and mobile devices
- **API Integration**: RESTful API for seamless frontend-backend communication

## 🛠 Technology Stack

### Frontend (Client)
- **React 18** - Modern JavaScript library for building user interfaces
- **Material-UI (MUI)** - React component library for faster and easier web development
- **Axios** - Promise-based HTTP client for API calls
- **Create React App** - Toolchain for React development

### Backend (Server)
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework for Node.js
- **SAP HANA Database** - Enterprise-grade in-memory database
- **CORS** - Cross-Origin Resource Sharing enabled
- **Body Parser** - Middleware to parse incoming request bodies

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.x or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **SAP HANA Database** access and credentials
- **Git** - [Download Git](https://git-scm.com/)

## 📥 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/shrutichaubey2501/employee-feedback.git
cd employee-feedback
```

### 2. Install Server Dependencies
```bash
cd server
npm install
```

### 3. Install Client Dependencies
```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Database Configuration
1. Navigate to the `server/config` directory
2. Update the database configuration with your SAP HANA credentials
3. Ensure your SAP HANA database is running and accessible

### Environment Setup
Create necessary environment variables for database connection and server configuration in the server directory.

## 🚀 Running the Application

### Method 1: Start Both Services Separately

#### Start the Backend Server
```bash
# Navigate to server directory
cd server

# Start the server
npm start
```
The server will start on **http://localhost:3001**

#### Start the Frontend Application
Open a new terminal window:
```bash
# Navigate to client directory
cd client

# Start the React application
npm start
```
The client application will start on **http://localhost:3000**

### Method 2: Development Mode
For development, you'll want to run both servers simultaneously:

1. **Terminal 1** (Backend):
   ```bash
   cd server
   npm start
   ```

2. **Terminal 2** (Frontend):
   ```bash
   cd client
   npm start
   ```

## 🌐 Accessing the Application

Once both servers are running:
- **Frontend**: Open your browser and navigate to `http://localhost:3000`
- **Backend API**: The API endpoints are available at `http://localhost:3001`

The React application will automatically open in your default browser. If it doesn't, manually navigate to the URL above.

## 📁 Project Structure

```
employee-feedback/
├── client/                 # React frontend application
│   ├── public/            # Public assets
│   ├── src/               # Source code
│   ├── package.json       # Frontend dependencies
│   └── ...
├── server/                # Node.js backend application
│   ├── config/           # Database and server configuration
│   ├── controllers/      # Business logic controllers
│   ├── models/           # Database models
│   ├── routes/           # API route definitions
│   ├── app.js            # Main server file
│   ├── package.json      # Backend dependencies
│   └── ...
├── README.md
└── .gitignore
```

## 🔧 Available Scripts

### Frontend (Client)
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Backend (Server)
- `npm start` - Starts the server with Node.js

## 🐛 Troubleshooting

### Common Issues

1. **Port Conflicts**: If ports 3000 or 3001 are already in use, you can:
   - Kill the process using the port
   - Modify the port numbers in the configuration

2. **Database Connection**: Ensure SAP HANA database is running and credentials are correct

3. **CORS Issues**: The server is configured to accept requests from `http://localhost:3000`. If you change the frontend port, update the CORS configuration in `server/app.js`

4. **Dependencies**: If you encounter dependency issues, try:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Open an issue in this repository
3. Contact the development team

---

**Note**: Make sure both the frontend and backend servers are running simultaneously for the application to work properly. The frontend communicates with the backend API to manage employee feedback data.