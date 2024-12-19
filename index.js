const express = require("express");
const mongoose = require("mongoose");
const News = require("./models/article"); // Import the schema

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/newsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Basic Route to Test
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Route to Add News Article
app.post("/add-news", async (req, res) => {
  try {
    const news = new News(req.body); // Create a new article using the schema
    const savedNews = await news.save(); // Save to database
    res.status(201).json(savedNews);
  } catch (err) {
    res.status(400).json({ message: "Error adding news", error: err.message });
  }
});

// Route to Get All News
app.get("/news", async (req, res) => {
  try {
    const allNews = await News.find(); // Fetch all articles
    res.status(200).json(allNews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching news", error: err.message });
  }
});

// Start the Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
