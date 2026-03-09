import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to localhost
//const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/websites';
const API_URL = 'https://mch-2026-interview-backend.vercel.app/api/websites';
const BASE_URL = 'https://mch-2026-interview-backend.vercel.app';

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // TODO: Fetch data from API_URL
  //   // The API returns { pagination: {...}, data: [...] }
    
  // }, []);
  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`連線失敗: ${res.status}`);
        const json = await res.json();
        // 根據提示，資料在 json.data 中
        setWebsites(json.data || []);
        console.log(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWebsites();
  }, []);

  if (loading) return <div> 
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
        {/* TODO: Map through the 'websites' array and render a project card for each.
            Include: image, name, description, tech_stack, and link.
            Refer to '../styles/WebsiteList.css' for available classes.
        */
          websites.map((site) => (
          <div className="project-card" key={site.id}>
            <div className="image-container">
              <img
                className="project-image"
                src={`${BASE_URL}${site.image_url}`}
                alt={site.name}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{site.name}</h3>
              <span className="year-tag">{site.year}</span>
              <p className="project-description">{site.description}</p>
              
              <div className="tech-stack">
                {site.tech_stack?.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {site.link && (
                <a className="project-link" href={site.link} target="_blank" rel="noreferrer">
                  造訪網站
                </a>
              )}
            </div>
          </div>
        ))
        }
      </div>
    </section>
  );
};

export default WebsiteList;