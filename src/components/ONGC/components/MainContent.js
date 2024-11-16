import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      {/* Video background only for the main page */}
      <video className="background-video" autoPlay loop muted>
        <source src="/public/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay on top of the video */}
      <div className="content-overlay">
        <div className="banner">
          <h2>ENERGY: Now AND Next</h2>
        </div>
        <div className="alerts">
          <div className="alert green">All implementing agencies...</div>
          <div className="alert red">Selection for the post...</div>
          <div className="alert yellow">Latest update on PM...</div>
          <div className="alert blue">EOI to invite competent...</div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
