import '../../App.css';
import HeroSection from '../HeroSection';
import ReactCompareImage from 'react-compare-image';
import './Home.css';
import Footer from '../Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpenConcerts, setModalIsOpenConcerts] = useState(false);
    const [modalIsOpenSports, setModalIsOpenSports] = useState(false);
    const [modalIsOpenWeddings, setModalIsOpenWeddings] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const openModalConcerts = () => setModalIsOpenConcerts(true);
    const closeModalConcerts = () => setModalIsOpenConcerts(false);

    const openModalSports = () => setModalIsOpenSports(true);
    const closeModalSports = () => setModalIsOpenSports(false);

    const openModalWeddings = () => setModalIsOpenWeddings(true);
    const closeModalWeddings = () => setModalIsOpenWeddings(false);

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
                        <div className="recent-projects-video">
                            <video
                                src="/videos/mikehill.mp4"
                                loop
                                muted
                                poster="/images/thumbnail1.png"
                                onClick={openModal}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                        <div className="recent-projects-text">
                            <h2>Corporations</h2>
                            <a href="/corporations" className="hover-link">
                                <span className="original-text">Commercials & Brands</span>
                                <span className="hover-text">View More</span>
                            </a>
                        </div>
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

                    <div className="recent-projects-section">
                        <div className="recent-projects-video">
                            <video
                                src="/videos/bunny.mp4"
                                loop
                                muted
                                poster="/images/thumbnail1.png"
                                onClick={openModalConcerts}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                        <div className="recent-projects-text">
                            <h2>Concerts</h2>
                            <a href="/concerts" className="hover-link">
                                <span className="original-text">Music Videos & Events</span>
                                <span className="hover-text">View More</span>
                            </a>
                        </div>
                        <Modal
                            isOpen={modalIsOpenConcerts}
                            onRequestClose={closeModalConcerts}
                            contentLabel="Video Modal"
                            className="video-modal"
                            overlayClassName="overlay"
                        >
                            <video
                                className="modal-video"
                                src="/videos/bunny.mp4"
                                controls
                                autoPlay
                                style={{ width: '100%' }}
                            />
                            <button className="close" onClick={closeModalConcerts}>Close</button>
                        </Modal>
                    </div>

                    <div className="recent-projects-section">
                        <div className="recent-projects-video">
                            <video
                                src="/videos/gym.mp4"
                                loop
                                muted
                                poster="/images/thumbnail1.png"
                                onClick={openModalSports}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                        <div className="recent-projects-text">
                            <h2>Fitness</h2>
                            <a href="/sports" className="hover-link">
                                <span className="original-text">Fitness & Sports</span>
                                <span className="hover-text">View More</span>
                            </a>
                        </div>
                        <Modal
                            isOpen={modalIsOpenSports}
                            onRequestClose={closeModalSports}
                            contentLabel="Video Modal"
                            className="video-modal"
                            overlayClassName="overlay"
                        >
                            <video
                                className="modal-video"
                                src="/videos/gym.mp4"
                                controls
                                autoPlay
                                style={{ width: '100%' }}
                            />
                            <button className="close" onClick={closeModalSports}>Close</button>
                        </Modal>
                    </div>

                    <div className="recent-projects-section">
                        <div className="recent-projects-video">
                            <video
                                src="/videos/weddings.mp4"
                                loop
                                muted
                                poster="/images/thumbnail1.png"
                                onClick={openModalWeddings}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                        <div className="recent-projects-text">
                            <h2>Weddings</h2>
                            <a href="/weddings" className="hover-link">
                                <span className="original-text">Ceremonies</span>
                                <span className="hover-text">View More</span>
                            </a>
                        </div>
                        <Modal
                            isOpen={modalIsOpenWeddings}
                            onRequestClose={closeModalWeddings}
                            contentLabel="Video Modal"
                            className="video-modal"
                            overlayClassName="overlay"
                        >
                            <video
                                className="modal-video"
                                src="/videos/weddings.mp4"
                                controls
                                autoPlay
                                style={{ width: '100%' }}
                            />
                            <button className="close" onClick={closeModalWeddings}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;