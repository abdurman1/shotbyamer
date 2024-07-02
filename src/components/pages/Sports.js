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
                <h1 className="page-title">ATHLETICS</h1>
                <div className="weddings-grid">
                    <div className="wedding-item"><video src="/athletics/Export WO1 T4.mp4" autoPlay loop muted/></div>
                    <div className="wedding-item"><video src="/athletics/1) Dinos - Mixtape (2).mp4" autoPlay loop muted/></div>
                    <div className="wedding-item"><video src="/athletics/4) Dinos - Short IG Reel .mp4" autoPlay loop muted/></div>
                    <div className="wedding-item"><img src="/athletics/bball.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><video src="/athletics/5) Dinos VS MRU Short IG Reel.mp4" autoPlay loop muted/></div>
                    <div className="wedding-item"><img src="/athletics/6) Dinos VS MRU (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/7) Dinos VS Griffins.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/8) Dinos VS MRU.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/9) Dinos VS Griffins.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/10) Dinos VS Griffins.jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/Dinos Pack the Jack Night .jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/LZB04641-Edit-Edit-Edit-3 (1).jpg" alt="Wedding Scene"/></div>
                    <div className="wedding-item"><img src="/athletics/LZB08342-Edit (1).jpg" alt="Wedding Scene"/></div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
