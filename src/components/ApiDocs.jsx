import React from 'react';
import '../styles/ApiDocs.css';

const ApiDocs = () => {
  // Use environment variable or fallback to production URL
  const API_URL = import.meta.env.VITE_API_URL || 'https://mch-2026-interview-backend.vercel.app/api/websites';
  const DOCS_URL = API_URL.replace('/websites', '/docs');

  return (
    <section className="api-docs-section">

      <div className="swagger-container">
        <iframe 
          src={DOCS_URL} 
          title="MCH 2026 API Docs"
          width="100%" 
          height="800px" 
          frameBorder="0"
          className="swagger-iframe"
        />
      </div>
    </section>
  );
};

export default ApiDocs;