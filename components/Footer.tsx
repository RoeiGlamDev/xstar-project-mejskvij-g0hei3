import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>HouseIL</h1> {/* Logo */}
                </div>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;