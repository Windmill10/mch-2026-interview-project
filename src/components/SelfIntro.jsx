import React from 'react';
import '../styles/SelfIntro.css';

const SelfIntro = () => {
  return (
    <section className="intro-section">
      <h1>歡迎來到梅竹黑客松 開發部 面試專案</h1>
      

      <div className="intro-details">
        <h3>自我介紹</h3>
        <ul className="intro-list">
          <li><strong>姓名：</strong> 江善有</li>
          <li><strong>背景：</strong> 國立清華大學 資訊工程學系 二年級</li>
          <li><strong>專長：</strong> C、C++、Verilog</li>
          <li><strong>興趣：</strong> 玩遊戲、做project</li>
          <li><strong>經歷：</strong> Capybaragotchi掌上型遊戲機、AC War game、啓碁科技 SQA intern</li>
        </ul>
      </div>
    </section>
  );
};

export default SelfIntro;