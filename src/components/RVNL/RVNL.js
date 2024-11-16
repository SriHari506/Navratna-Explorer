// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import WhoWeAre from './components/WhoWeAre';
import Stats from './components/stats';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import './styles.css';
function App() {
    return (
        <div>
            <Header /> {/* Include Header with Logo at the top */}
            <Banner />
            <WhoWeAre />
            <Stats />
            <ImageGallery />
            <Footer />
        </div>
    );
}

export default App;
