# Dispensary Management System

## Overview

This project is a Dispensary Management System built using the MERN stack (MongoDB, Express.js, React, Node.js). The system allows admins and doctors to manage prescriptions, inventory, and generate reports. It also includes features like email notifications and AI-generated precautions.

## Initial Setup

1. **Version Control**:
   - Set up a Git repository to manage your project code.

2. **Project Structure**:
   - Create a folder structure that separates the client (React) and server (Node.js + Express) code.

## Backend Development (Node.js + Express)

### 1. Initialize the Backend

- Create a new directory for the backend.
- Initialize it with `npm init`.
- Install necessary packages:

  ```bash
  npm install express mongoose nodemailer jsonwebtoken body-parser cors dotenv openai
  ```

### 2. Setup Express Server

- Create an entry point file `server.js`.
- Set up a basic Express server and middleware (body-parser, cors).

### 3. Database Setup (MongoDB)

- Create a MongoDB database (you can use MongoDB Atlas for a cloud-based solution).
- Create Mongoose models for your data:
  - User (admin)
  - Doctor
  - Student
  - Prescription
  - Medicine
  - HOD

### 4. Authentication

- Implement JWT-based authentication for admin login.
- Create routes for signup and login.

### 5. API Endpoints

- Create routes and controllers for:
  - **Prescription Management**: Creating, reading, and fetching prescriptions.
  - **Doctor Dashboard**: Fetching patient details, managing inventory, generating weekly reports.
  - **Inventory Management**: CRUD operations on medicine inventory.
  - **Mailing**: Send emails to students and HODs.

### 6. Email Service

- Set up `nodemailer` to send emails with prescription PDFs.
- Create functions to generate PDFs using libraries like `pdfkit` or `jspdf`.

### 7. OpenAI Integration

- Integrate OpenAI API to generate basic precautions based on diagnoses.

## Frontend Development (React)

### 1. Initialize the Frontend

- Create a new directory for the frontend.
- Initialize it with `npx create-react-app`.

### 2. Component Structure

- Set up a component structure with folders like `components`, `pages`, `services`, and `utils`.

### 3. UI Components

- Use libraries like Material-UI or Ant Design for pre-built components.
- Create necessary components:
  - **Login Page**: For admin login.
  - **Doctor Dashboard**: Includes forms for prescriptions, inventory details, patient history, and dropdown for doctor selection.
  - **Prescription Form**: Form to input prescription details.
  - **Inventory Management**: Display and manage inventory items.

### 4. State Management

- Use Context API or Redux for managing global state.

### 5. API Integration

- Create a `services` folder to manage API calls using `axios`.
- Connect frontend forms to backend endpoints for creating prescriptions, managing inventory, etc.

### 6. PDF Generation

- Use libraries like `jspdf` or `react-pdf` to generate PDFs of prescriptions.

## Connecting Frontend and Backend

- Ensure CORS is properly configured in the backend to allow requests from the frontend.
- Use environment variables to manage configurations like API keys, database URLs, etc.

## Deployment

- **Frontend**: Deploy the React application on platforms like Vercel or Netlify.
- **Backend**: Deploy the Node.js server on platforms like Heroku, DigitalOcean, or AWS.
- **Database**: Ensure your MongoDB instance is accessible by your deployed backend.

## Detailed Development Order

### 1. Backend Setup

- Initialize project
- Set up Express server
- Configure MongoDB with Mongoose
- Implement JWT authentication
- Create Mongoose models
- Implement routes and controllers
- Set up nodemailer
- Integrate OpenAI API

### 2. Frontend Setup

- Initialize project
- Set up basic routing and component structure
- Create admin login page
- Create doctor dashboard with forms and inventory management
- Implement state management
- Connect to backend APIs
- Implement PDF generation

### 3. Integration

- Test frontend-backend interaction
- Debug and refine the application

### 4. Deployment

- Deploy frontend
- Deploy backend
- Connect frontend and backend
- Ensure all functionalities are working as expected

## Mongoose Model Example

Here is an example of a Mongoose model for the `Student` schema:

```javascript
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  roll: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true
  },
  hostelNumber: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
```

This schema can be expanded or modified according to the project requirements. Follow similar steps to create other models as needed.