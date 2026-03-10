import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'https://mch-2026-interview-backend.vercel.app/api/websites';

// Base URL for resolving absolute image paths
const getBaseUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.protocol}//${parsedUrl.host}`;
  } catch {
    return 'https://mch-2026-interview-backend.vercel.app';
  }
};

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const baseUrl = getBaseUrl(API_URL);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        if (json && json.data) {
          setWebsites(json.data);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  if (loading) return <div className="loading-container"> 
    <div className="loader"></div>
    <h2>Loading projects...</h2> 
    <p>正在從伺服器獲取歷屆梅竹黑客松網站資料...</p>
  </div>;

  if (error) return <div className="error-container">
    <h2>Oops! Something went wrong.</h2>
    <div className="error">Error: {error}</div>
    <p>無法載入專案，請稍後再試。</p>
  </div>;

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>歷屆梅竹黑客松專案庫</h2>
        <p>這些是過去幾年黑客松的活動網站，見證了活動的成長與傳承。</p>
      </div>
      
      <div className="projects-grid">
        {websites.map((site) => {
          // Construct absolute image URL
          const imageUrl = site.image_url.startsWith('http') 
            ? site.image_url 
            : `${baseUrl}${site.image_url.startsWith('/') ? '' : '/'}${site.image_url}`;
            
          return (
            <a 
              href={site.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card" 
              key={site.id}
            >
              <div className="project-image-wrapper">
                <img 
                  src={imageUrl} 
                  alt={`${site.name} screenshot`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found';
                  }}
                />
                <div className="project-year-badge">{site.year}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{site.name}</h3>
                <p className="project-desc">{site.description}</p>
                
                {site.tech_stack && (
                  <div className="project-tech">
                    {site.tech_stack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                
                <div className="project-link-text">
                  前往網站 <span className="arrow">→</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default WebsiteList;
