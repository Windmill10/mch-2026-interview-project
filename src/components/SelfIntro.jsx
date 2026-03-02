import React from 'react';
import '../styles/SelfIntro.css';

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const SelfIntro = () => {
  return (
    <section className="intro-container">
      <div className="intro-main-card">
        <div className="profile-section">
          <div className="profile-photo">
            {/* 照片已移動至 public/my-photo.JPG */}
            <img 
              src={`${import.meta.env.BASE_URL}my-photo.JPG`} 
              alt="呂向荷" 
            />
          </div>
          <div className="profile-titles">
            <h1>呂向荷</h1>
            <p>國立陽明交通大學 電機工程學系</p>
            <a href="https://doralu950413ee13-gif.github.io/my-website/#/" target="_blank" rel="noopener noreferrer" className="personal-website-link">
              <GlobeIcon />
              <span>個人網站</span>
            </a>
            <p className="website-cta">✨ 點擊連結認識更多面向的我(但是還沒架完ㄏㄏ)</p>
          </div>
        </div>
        
        <div className="divider" />

        <div className="intro-details-modern">
          <div className="detail-item">
            <div className="detail-icon"><BookIcon /></div>
            <div className="detail-text">
              <label>背景</label>
              <span>台北人，目前在新竹交大就讀電機系大二。</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon"><CodeIcon /></div>
            <div className="detail-text">
              <label>技術工具</label>
              <span>React, CSS, Java, C++, Python</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon"><HeartIcon /></div>
            <div className="detail-text">
              <label>生活興趣</label>
              <span>唱KTV、爬山看夜景，認識各式各樣不同領域的人！！</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon"><BriefcaseIcon /></div>
            <div className="detail-text">
              <label>相關經歷</label>
              <span>架設系學會網站、個人網站、光舞軟體組</span>
            </div>
          </div>
        </div>

        <div className="about-me-extra">
          <h3>關於我</h3>
          <p>
            你好！我是呂向荷，也可以叫我阿荷。一個勇於嘗試且不考慮摟頂永遠犧牲睡眠的人。做過最瘋狂的事之一是在期末周的時候連續五天讀到三點，四點睡覺，八點去考試。近期最有趣的事情是自己去歐洲獨旅😍😍(既然都講到了就在下面放一下照片嘻嘻)
          </p>
        </div>
      </div>

      {/* 自動滾動照片牆 */}
      <div className="photo-wall-container">
        <div className="photo-wall-viewport">
          <div className="photo-wall-track">
            {[
              "IMG_9331.JPG",
              "IMG_9332.JPG",
              "P1040941.JPG",
              "P1040997.JPG",
              "P1050022.JPG",
              "P1050023.JPG"
            ].map((filename, index) => (
              <div key={`photo-${index}`} className="photo-item">
                <img src={`${import.meta.env.BASE_URL}${filename}`} alt={`Photo ${index + 1}`} />
              </div>
            ))}
            {/* 重複一次圖片序列以達成無縫捲動 */}
            {[
              "IMG_9331.JPG",
              "IMG_9332.JPG",
              "P1040941.JPG",
              "P1040997.JPG",
              "P1050022.JPG",
              "P1050023.JPG"
            ].map((filename, index) => (
              <div key={`photo-dup-${index}`} className="photo-item">
                <img src={`${import.meta.env.BASE_URL}${filename}`} alt={`Photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
