// src/components/ImageGallery.js
import React from 'react';
import './ImageGallery.css';

function ImageGallery() {
    const images = [
        { src: 'assets/image1.jpg', alt: 'Image 1' },
        { src: 'assets/image2.jpg', alt: 'Image 2' },
        { src: 'assets/image3.jpg', alt: 'Image 3' },
        { src: 'assets/image4.jpg', alt: 'Image 4' },
    ];

    return (
        <div className="parallax-container">
            <div className="parallax-scroller">
                {images.map((image, index) => (
                    <div key={index} className="parallax-image-wrapper">
                        <img src={image.src} alt={image.alt} className="parallax-image" />
                    </div>
                ))}
                {/* Duplicate images for seamless scrolling */}
                {images.map((image, index) => (
                    <div key={`duplicate-${index}`} className="parallax-image-wrapper">
                        <img src={image.src} alt={image.alt} className="parallax-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
