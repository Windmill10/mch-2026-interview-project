import React from 'react';
import '../styles/SelfIntro.css';

const SelfIntro = () => {
  return (
    <section className="intro-section">
      <h1>歡迎來到梅竹黑客松 開發部 面試專案</h1>

      <p className="intro-text">
        在第一部分的自我介紹的頁面中，大家可以自由發揮喔！
      </p>

      <div className="intro-details">
        <h3>自我介紹</h3>
        <ul className="intro-list">
          <li><strong>姓名：</strong> 黃新勝</li>
          <li><strong>背景：</strong> 國立清華大學 / 資訊工程學系 / 28 級</li>
          <li><strong>專長：</strong> Python, bash, Lua, C/C++ / Next.js, FastAPI / Git</li>
          <li><strong>興趣：</strong> 自動化 / 睡覺</li>
          <li><strong>經歷：</strong> 個人網頁: https://me.xsooi.com / 無實習經驗</li>
        </ul>
      </div>
    </section>
  );
};

export default SelfIntro;
