import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to production URL
const API_URL = import.meta.env.VITE_API_URL || 'https://mch-2026-interview-backend.vercel.app/api/websites';

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch websites');
        }
        const result = await response.json();
        setWebsites(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  if (loading) return <div className="loading-container"> 
    <h2> Loading projects...  </h2> 
    <br></br>
    <p> 歡迎來到第二部分 這部分請從提供的API端點取得歷屆黑客松網站的資料，並呈現在頁面上。</p> 
    <p>格式也不限於卡片或提供的範例樣式，大家歡迎自由發揮，展現自己的能力!</p>
  
  </div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="projects-section">
      <h2>Project Gallery</h2>
      <br />
      <div className="projects-grid">
        {websites.map((project) => {
          // Prepend base URL to image if it's a relative path
          const imageUrl = project.image_url.startsWith('http') 
            ? project.image_url 
            : `https://mch-2026-interview-backend.vercel.app${project.image_url}`;

          return (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={imageUrl} alt={project.name} loading="lazy" />
              </div>
              <div className="project-info">
                <span className="project-year">{project.year}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Website
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebsiteList;