import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#000', color: '#fff' }}>
            <header className="contact-header">
                <h1 style={{ color: '#ff69b4' }}>Contact HouseIL</h1> {/* Pink color for elegance */}
            </header>
            <main className="contact-content">
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" style={{ backgroundColor: '#ff69b4', color: '#000' }}>
                        Send Message
                    </button>
                </form>
            </main>
            <footer className="contact-footer">
                <p>© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;