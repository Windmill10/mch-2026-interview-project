import React, { useState, useEffect } from 'react';
import '../styles/WebsiteList.css';

// Use environment variable or fallback to localhost
const API_URL = "https://mch-2026-interview-backend.vercel.app/api/websites";

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
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // API returns { pagination: {...}, data: [...] }
        setWebsites(result.data);

      } catch (err) {
        setError("Failed to fetch websites");
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
        {websites.map((site) => (
          <div className="project-card" key={site.id}>
            <img
              src={`https://mch-2026-interview-backend.vercel.app${site.image_url}`}
              alt={site.name}
              className="project-image"
            />

            <div className="project-content">
              <h3>{site.name}</h3>

              <p className="project-description">
                {site.description}
              </p>
              
              {/* <p className="project-tech">
                <strong>Tech Stack:</strong>{" "}
                {Array.isArray(site.tech_stack) && site.tech_stack.length > 0
                  ? site.tech_stack.join(", ")
                  : "N/A"}
              </p> */}

              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
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