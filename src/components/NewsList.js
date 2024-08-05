// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import fetchNews from './newsService';
import './NewsList.css';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        setArticles(newsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="news-title"><b>Latest News</b></h2>
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <h2><b>{article.title}</b></h2>
            <p>{article.description}</p>
            <p className="author"><strong>Author:</strong> {article.creator}</p>
            <p className="date"><strong>Date:</strong> {new Date(article.pubDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
