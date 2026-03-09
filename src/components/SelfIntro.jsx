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
          <li><strong>姓名：</strong> 陳芃錡</li>
          <li><strong>背景：</strong> 清大資工大二</li>
          <li><strong>專長：</strong> 資料結構演算法、C++、C、Python、HTML、CSS</li>
          <li><strong>興趣：</strong> 打籃球、彈吉他</li>
          <li><strong>經歷：</strong> C++跑酷遊戲、簡易個人網站、兒童程式老師</li>
        </ul>
      </div>
    </section>
  );
};

export default SelfIntro;