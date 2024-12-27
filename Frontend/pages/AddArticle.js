// src/pages/AddArticle.js
import React, { useState } from "react";
import axios from "axios";
import ArticleForm from "../components/ArticleForm";

const AddArticle = () => {
  const [article, setArticle] = useState({
    headline: "",
    description: "",
    link: "",
    img: "",
  });

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/articles", article);
      alert("Article added successfully!");
      setArticle({ headline: "", description: "", link: "", img: "" });
    } catch (error) {
      console.error("Error adding article:", error);
      alert("Failed to add article.");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add a New Article</h1>
      <ArticleForm
        article={article}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddArticle;
