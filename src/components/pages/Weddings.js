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
                <h1 className="page-title">WEDDINGS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><img src="/wedding-img/DSC00001-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC04906.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08214.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08243.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08690.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08709.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08743.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08842.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC08895.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09199.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09358.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09369.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09494.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09508.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09511.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09530.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09565.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09647-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09680-Edit.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09688.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/wedding-img/DSC09977-Edit.jpg" alt="Wedding Scene"/></div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
