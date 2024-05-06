import '../../App.css'
import React from 'react';
import HeroSection from '../HeroSection';
import ReactCompareImage from 'react-compare-image';
import './Home.css';

function Home() {
    return (
        <>
            <HeroSection />
            <div style={{ padding: '20px' }}>
                <h2 className="some-of-our-work-heading">SOME OF OUR WORK</h2>
                <ReactCompareImage
                    leftImage="/images/LZB02554-Edit.jpg"
                    rightImage="/images/LZB02554-Edit (1).jpg"
                    leftImageAlt="Before"
                    rightImageAlt="After"
                />
                {/* Add additional sliders as needed */}
            </div>
        </>
    );
}

export default Home;
