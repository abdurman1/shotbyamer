import React from 'react';
import './Weddings.css';
import Footer from '../Footer';

export default function Weddings() {
    return (
        <div className="main-container">
            <video src="/videos/valintino.mp4" autoPlay loop muted className="background-video" />
            <nav className="side-nav">
                <div className="title">
                    <p>FILMING IN ALBERTA, CANADA</p>
                    <p className="bigger">MAKING MEMORIES LAST FOREVER</p>
                </div>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/corporations">CORPORATIONS</a></li>
                    <li><a href="/weddings">WEDDINGS</a></li>
                    <li><a href="/sports">ATHLETICS</a></li>
                    <li><a href="/concerts">CONCERTS</a></li>
                </ul>
            </nav>
            <div className="content-container">
                <h1 className="page-title">CONCERTS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><img src="/concerts/nav.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/4HB5v6WQ-2.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/Bundog.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC01012.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC02455.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC03874.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC03889.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC04558.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC04802.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC04937.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC05071-Edit-Edit (1).png" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/DSC09963.jpeg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/duplicate shadow final-Edit (1).png" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/IMG_4407.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/IMG_4606.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/IMG_4626-2.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/Kranium (1).JPG" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB01148.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB01155.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB01157-3.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB02600.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB07935.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB08672-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB08784-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/LZB09993.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/Nav (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/Nav (2).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/Sheck Wes (1).JPG" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/concerts/uEcjh7PQ-Edit-2.jpg" alt="Wedding Scene"/></div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
