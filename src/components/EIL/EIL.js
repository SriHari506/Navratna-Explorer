import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Business from './pages/Business';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Home from './pages/Home'; // Assuming there's a Home component
import './EIL.css';
import backgroundVideo from './assets/videos/background.mp4';

const BackgroundVideo = () => (
  <video autoPlay loop muted playsInline className="background-video">
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* Render background video only on the Home page */}
      {isHomePage && <BackgroundVideo />}

      <div className="overlay">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
