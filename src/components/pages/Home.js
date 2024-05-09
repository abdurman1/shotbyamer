import '../../App.css'
import React from 'react';
import HeroSection from '../HeroSection';
import ReactCompareImage from 'react-compare-image';
import './Home.css';
import Footer from '../Footer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        className: 'slider variable-width'
      };
      

    return (
        <>
            <HeroSection />
            <div style={{ padding: '20px' }} className='image-slider-container'>
                <h2 className="some-of-our-work-heading">SOME OF OUR WORK</h2>
                <Slider {...settings}>
                    <div>
                        <ReactCompareImage
                            leftImage="/images/LZB02554-Edit.jpg"
                            rightImage="/images/LZB02554-Edit (1).jpg"
                            leftImageAlt="Before"
                            rightImageAlt="After"
                        />
                    </div>
                    <div>
                        <ReactCompareImage
                            leftImage="/images/LZB02554-Edit.jpg"
                            rightImage="/images/LZB02554-Edit (1).jpg"
                            leftImageAlt="Before"
                            rightImageAlt="After"
                        />
                    </div>
                    <div>
                        <ReactCompareImage
                            leftImage="/images/nav.jpg"
                            rightImage="/images/nav-edit-2.jpg"
                            leftImageAlt="Before"
                            rightImageAlt="After"
                        />
                    </div>
                    <div>
                        <ReactCompareImage
                            leftImage="/images/nav.jpg"
                            rightImage="/images/nav-edit-2.jpg"
                            leftImageAlt="Before"
                            rightImageAlt="After"
                        />
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>
            <div className="zigzag-layout">
                <div className="zigzag-item">
                    <img src="/images/nav.jpg" alt="Sample Image 1" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="zigzag-item reverse">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img src="/images/nav.jpg" alt="Sample Image 2" />
                </div>
                <div className="zigzag-item">
                    <img src="/images/nav.jpg" alt="Sample Image 3" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="zigzag-item reverse">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img src="/images/nav.jpg" alt="Sample Image 4" />
                </div>
                <div className="zigzag-item">
                    <img src="/images/nav.jpg" alt="Sample Image 5" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
