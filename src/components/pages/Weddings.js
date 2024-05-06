import React from 'react';
import HeroSection from '../HeroSection';
import './Weddings.css';  // Make sure this is linked correctly

// Importing images (Assuming these are the paths)

export default function Weddings() {
    return (
        <>
            <HeroSection />
            <div className="weddings-container">
                <h1 className="page-title">WEDDINGS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><img src="/images/BUxZwxnA-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB04641.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/BUxZwxnA-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB04641.jpg" alt="Wedding Scene"/></div>
                    {/* Add more images as needed */}
                </div>
            </div>
        </>
    );
}


