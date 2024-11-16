import React from 'react';
import backgroundVideo from '../assets/videos/background.mp4';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="home-overlay">
        <h1>Engineers India Limited</h1>
        <p>Innovating for a better tomorrow</p>
      </div>
    </div>
  );
};

export default Home;
