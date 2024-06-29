import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
            const responseData = await response.text();
            alert('Message sent: ' + responseData);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message');
        }
    };

    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com/shotbyamer" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="Instagram" />
                </a>
            </div>
            <div className='contact-us'>
                <p>
                    Email Contact
                </p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        required
                        id='name'
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        id='email'
                    />
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Message"
                        required
                        id='message'
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
            <p>© 2024 ShotByAmer. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

