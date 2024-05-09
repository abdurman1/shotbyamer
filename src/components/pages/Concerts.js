import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection';
import Footer from '../Footer';  // Import the Footer component
import './Weddings.css';  // Make sure this is linked correctly

// Importing images (Assuming these are the paths)

export default function Concerts() {
    return (
        <>
            <HeroSection />
            <div className="weddings-container">
                <h1 className="page-title">CONCERTS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><img src="/images/nav.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB04641.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/nav.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB02554-Edit (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/LZB04641.jpg" alt="Wedding Scene"/></div>
                    {/* Add more images as needed */}
                </div>
                <Footer/>
            </div>
        </>
    );
}