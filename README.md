# News Application - MERN Stack
This is a backend implementation of a News Application using the MERN stack. Currently, it includes API endpoints for managing news articles stored in a MongoDB database using Express.js and Node.js. The front-end will later be developed using React.js.

## Features
Add News Article: Save news articles to the database.
Fetch All News Articles: Retrieve all stored news articles.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Frontend (future): React.js

## Prerequisites
To run the backend of this application, ensure the following are installed:

Node.js (v16 or later recommended)
MongoDB (local or hosted MongoDB instance)

## API Endpoints
Base URL: http://localhost:3000
Test Route:

GET /
Returns a message to confirm the server is running.

Add News Article:
POST /add-news: Adds a new news article to the database using the data provided in the request body.

Fetch All News:
GET /news
Fetches all articles from the database.
Response: Array of news articles.

## File Structure
/models
  article.js      # Mongoose schema for news articles

  
index.js          # Backend server setup and API routes


package.json      # Backend dependencies and project metadata

## Dependencies
### Backend:
express: Web framework for Node.js
mongoose: MongoDB object modeling
