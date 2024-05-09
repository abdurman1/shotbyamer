import React from 'react';
import './Footer.css';  // Ensure to create and link this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.png" alt="Facebook" />
                </a>
            </div>
            <p>© 2024 ShotByAmer. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
