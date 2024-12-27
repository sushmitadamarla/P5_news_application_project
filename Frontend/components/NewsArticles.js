import React, { useState, useEffect } from 'react';

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/articles'); // Use the full URL for the backend
        if (!response.ok) {
          throw new Error('Error fetching articles');
        }
        const data = await response.json();
        setArticles(data); // Set the articles data
      } catch (err) {
        console.error(err);
        setError('Error fetching articles');
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mt-4">
      <h1>All News Articles</h1>
      {error && <p>{error}</p>}
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
