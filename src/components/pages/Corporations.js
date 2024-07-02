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
                <h1 className="page-title">CORPORATIONS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><img src="/images/valentino2.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/images/valentino.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><video src="/videos/barber.mp4" autoPlay loop muted/></div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
