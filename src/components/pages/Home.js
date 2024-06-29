import '../../App.css'
import HeroSection from '../HeroSection';
import ReactCompareImage from 'react-compare-image';
import './Home.css';
import Footer from '../Footer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingRecent, setIsPlayingRecent] = useState(false);
    const videoRef = useRef(null);
    const recentVideoRef = useRef(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true); 
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayRecent = () => {
        const video = recentVideoRef.current;
        if (video.paused) {
            video.play();
            setIsPlayingRecent(true);
        } else {
            video.pause();
            setIsPlayingRecent(false);
        }
    };
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        className: 'slider-variable-width'
      };
      

    return (
        <>
            <HeroSection />
            <div className='image-slider-container'>
                <h2 className="some-of-our-work-heading">SOME OF OUR WORK</h2>
                    <Slider {...settings}>
                        <div className='carousel-img'>
                            <ReactCompareImage
                                leftImage="/images/LZB02554-Edit.jpg"
                                rightImage="/images/LZB02554-Edit (1).jpg"
                                leftImageAlt="Before"
                                rightImageAlt="After"
                            />
                        </div>
                        <div className='carousel-img'>
                            <ReactCompareImage
                                leftImage="/images/LZB02554-Edit.jpg"
                                rightImage="/images/LZB02554-Edit (1).jpg"
                                leftImageAlt="Before"
                                rightImageAlt="After"
                            />
                        </div>
                        <div className='carousel-img'>
                            <ReactCompareImage
                                leftImage="/images/nav.jpg"
                                rightImage="/images/nav-edit-2.jpg"
                                leftImageAlt="Before"
                                rightImageAlt="After"
                            />
                        </div>
                        <div className='carousel-img'>
                            <ReactCompareImage
                                leftImage="/images/nav.jpg"
                                rightImage="/images/nav-edit-2.jpg"
                                leftImageAlt="Before"
                                rightImageAlt="After"
                            />
                        </div>
                    </Slider>
                </div>
            <div className="zigzag-layout">
                <div className="zigzag-item">
                    <div>
                        <h3>SHOWCASE</h3>            
                        <div className="video-container">
                            <video ref={videoRef} onClick={togglePlay} className="video-player" src="/videos/mru.mp4" />

                            {!isPlaying && <button className="play-button" onClick={togglePlay}><img src="/images/play.svg" alt="Play" className="playicon" /></button>}
                        </div>
                    </div>
                    <h1>Recent Projects</h1>
                    <div className="recent-projects-section">
                        <video
                            className="recent-projects-video"
                            src="/videos/mikehill.mp4"
                            loop
                            muted
                            poster="/images/thumbnail1.png"
                            onClick={openModal}
                            style={{ width: '100%', cursor: 'pointer' }}
                        />
                        <h2>Corporations</h2>
                        <a href="/corporations" className="hover-link">
                            <span className="original-text">Commercials & Brands</span>
                            <span className="hover-text">View More</span>
                        </a>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Video Modal"
                            className="video-modal"
                            overlayClassName="overlay"
                        >
                            <video
                                className="modal-video"
                                src="/videos/mikehill.mp4"
                                controls
                                autoPlay
                                style={{ width: '100%' }}
                            />
                            <button className="close" onClick={closeModal}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
