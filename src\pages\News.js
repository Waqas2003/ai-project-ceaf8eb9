import React from 'react';
import news from '../data/news';

function News() {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;