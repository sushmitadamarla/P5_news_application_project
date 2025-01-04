# News Application

A feature-rich news application built using React for the frontend, Express and Node.js for the backend, and MongoDB for the database. The app allows users to log in, view, add, and manage news articles.

## Features

- **Login System**: Simple login/logout functionality using local storage.
- **News Articles**: Display news articles fetched from the database.
- **Add Article**: Form to add new articles to the database.
- **Protected Routes**: Certain routes are accessible only to logged-in users.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Error Boundary**: Handles errors gracefully.
- **Scroll to Top**: Smooth scrolling experience.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - CSS for styling
- **Backend**:
  - Node.js
  - Express
- **Database**:
  - MongoDB (local MongoDB instance)
- **Miscellaneous**:
  - Axios for HTTP requests
  - LocalStorage for session management
  - CORS for cross-origin requests

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally
- Basic knowledge of React and Node.js

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/news-app.git
cd news-app
```
### 2. Install Dependencies
#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd ../server
npm install
```
### 3. Start MongoDB
Ensure MongoDB is running on localhost:27017.

### 4. Configure Environment
No .env file is required. The MongoDB connection string is hardcoded in the backend.

### 5. Run the Application
#### Start Backend
``` bash
cd server
node index.js
```
#### Start Frontend
```bash
cd ../client
npm start
```
The app will be available at http://localhost:3000.

Folder Structure

```
news-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── server/
│   ├── models/
│   │   ├── article.js
│   ├── index.js
│   ├── package.json
├── README.md
```

### API Endpoints

#### Backend Routes
```
POST /api/articles - Add a new article
GET /api/articles - Get all articles
GET /api/articles/:id - Get a specific article by ID
DELETE /api/articles/:id - Delete an article by ID
```

### Future Enhancements
Add user authentication using JWT.
Integrate a third-party news API for fetching real-time news.
Enhance UI/UX with a modern design framework like Material-UI or Tailwind CSS.
