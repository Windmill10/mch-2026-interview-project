import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'https://mch-2026-interview-backend.vercel.app/api/websites';
const BASE_URL = 'https://mch-2026-interview-backend.vercel.app';

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        // API returns { pagination: {...}, data: [...] }
        setWebsites(result.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  if (loading) return <div>
    <h2>Loading projects...</h2>
    <br />
    <p>歡迎來到第二部分 這部分請從提供的API端點取得歷屆黑客松網站的資料，並呈現在頁面上。</p>
    <p>格式也不限於卡片或提供的範例樣式，大家歡迎自由發揮，展現自己的能力!</p>
  </div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="projects-section">
      <h2>Project Gallery</h2>
      <br />
      <div className="projects-grid">
        {websites.map((website) => (
          <div key={website.id} className="project-card">
            <div className="card-image">
              <img src={`${BASE_URL}${website.image_url}`} alt={website.name} />
            </div>
            <div className="card-content">
              <h3>{website.name}</h3>
              <span className="year-badge">{website.year}</span>
              <p className="date-range">{website.description}</p>
              <a href={website.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                參訪網站
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteList;