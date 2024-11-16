import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the updated CSS for styles

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to handle the sliding effect
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 4); // 4 is the number of cards
  };

  return (
    <div className="home-container">
      {/* NBCC Header */}
      <header className="home-header text-center py-5">
        <h1>Welcome to NBCC</h1>
        <p>Your gateway to business, media, and opportunities.</p>
      </header>

      {/* Home Page Content */}
      <section className="home-content py-5">
        <h2 className="text-center mb-4">Explore Our Key Areas</h2>

        {/* Card Container */}
        <div className="card-container">
          <div className="card-slide" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            <div className="card">
              <img src="https://nbccindia.in/images/resource/BOD/SwamiSirDC15.jpeg" alt="Business Services" />
              <div className="card-body">
                <h5 className="card-title">Business & Services</h5>
                <p className="card-text">Explore our business services that cater to various industries and clients.</p>
                <Link to="/nbcc/business-services" className="btn btn-primary">Learn More</Link>
              </div>
            </div>

            <div className="card">
              <img src="https://nbccindia.in/images/news/PNews_29102024.jpeg" alt="Media" />
              <div className="card-body">
                <h5 className="card-title">Media</h5>
                <p className="card-text">Stay updated with the latest media and news about NBCC and our initiatives.</p>
                <Link to="/nbcc/media" className="btn btn-primary">Learn More</Link>
              </div>
            </div>

            <div className="card">
              <img src="https://blog.madeeasy.in/wp-content/uploads/2021/12/nbcc-recruitment-management-trainee-through-gate.jpg" alt="Opportunities" />
              <div className="card-body">
                <h5 className="card-title">Opportunities</h5>
                <p className="card-text">Discover career and partnership opportunities available with NBCC.</p>
                <Link to="/nbcc/opportunities" className="btn btn-primary">Learn More</Link>
              </div>
            </div>

            <div className="card">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQFae-fHfy-sdQ/feedshare-shrink_800/feedshare-shrink_800/0/1728484084630?e=2147483647&v=beta&t=EF8VQzr4RvNv8EKNU5DZ2AqiMpMMLmbk_w2N8WI-8h8" alt="Human Resources" />
              <div className="card-body">
                <h5 className="card-title">Human Resources</h5>
                <p className="card-text">Learn about our team, HR practices, and the benefits of working at NBCC.</p>
                <Link to="/nbcc/human-resources" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sliding Bar */}
        <div className="sliding-bar">
          <h3 className="text-center mb-4">Discover More About NBCC</h3>
          <div className="slider">
            <input
              type="range"
              min="0"
              max="3"
              value={slideIndex}
              className="slider-range"
              onChange={(e) => setSlideIndex(Number(e.target.value))}
            />
            <p className="slider-value">Slide to explore different sections</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
