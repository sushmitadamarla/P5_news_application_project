# News Application - MERN Stack

This is the backend implementation of a News Application using the MERN stack. Currently, it includes API endpoints for managing news articles stored in a MongoDB database using Express.js and Node.js. The frontend will be developed using React.js.

## Features

- **Add News Article**: Save news articles to the database.
- **Fetch All News Articles**: Retrieve all stored news articles.
- **Delete News Article**: Remove a specific article by its ID.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend (future)**: React.js

## Prerequisites

To run the backend of this application, ensure the following are installed:

- **Node.js** (v16 or later recommended)
- **MongoDB** (local or hosted MongoDB instance)

## API Endpoints

- **Base URL**: `http://localhost:5000`

### Test Route:
- **GET /**  
  Returns a message confirming the server is running.

### Add News Article:
- **POST** `/api/articles`  
  Adds a new news article to the database using the data provided in the request body.
  - Example request body:
    ```json
    {
      "title": "Sample News Title",
      "content": "This is the content of the news article."
    }
    ```
  - Response: Returns the saved news article.

### Fetch All News:
- **GET** `/api/articles`  
  Fetches all articles from the database.
  - Response: Array of news articles in JSON format.
  
### Delete News Article by ID:
- **DELETE** `/api/articles/:id`  
  Deletes a news article by its ID.
  - Response: Success or error message.

## File Structure

/models article.js # Mongoose schema for news articles

/index.js # Backend server setup and API routes

/package.json # Backend dependencies and project metadata

## Dependencies

### Backend:
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **cors**: Middleware to enable Cross-Origin Request Sharing (CORS)

### Future Enhancements
Frontend (React.js) development to display articles dynamically and interact with the backend API.
Implement user authentication and authorization for managing articles.
