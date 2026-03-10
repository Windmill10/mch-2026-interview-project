import React from 'react';
import '../styles/SelfIntro.css';

const SelfIntro = () => {
  return (
    <section className="intro-section">
      <div className="intro-header">
        <h1>歡迎來到梅竹黑客松 開發部 面試專案</h1>
        <p className="intro-text">
          哈囉！
          很高興能參與梅竹黑客松開發部的面試專案！
        </p>
      </div>

      <div className="intro-details-card">
        <h3>關於我</h3>
        <div className="intro-grid">
          <div className="intro-item">
            <span className="intro-icon">👤</span>
            <div className="intro-content">
              <strong>姓名</strong>
              <span>田俊騏</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🎓</span>
            <div className="intro-content">
              <strong>背景</strong>
              <span>清華大學 / 資訊工程系 / 二年級</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">💻</span>
            <div className="intro-content">
              <strong>專長</strong>
              <span>C, C++, Python</span><br></br>
              <strong>這學期正在學</strong>
              <span>React, CSS, JavaScript, Java</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🎨</span>
            <div className="intro-content">
              <strong>興趣</strong>
              <span>睡覺、賴床、出去玩</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🚀</span>
            <div className="intro-content">
              <strong>經歷</strong>
              <span>資工系必修的一些projects
                這學期正在學網頁開發
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
