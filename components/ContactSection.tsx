import React from 'react';
import './ContactSection.css'; // Assuming a CSS file for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#000', color: '#FFC0CB' }}>
            <div className="container">
                <h2>Contact Us</h2>
                <p>We would love to hear from you! Please fill out the form below.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;