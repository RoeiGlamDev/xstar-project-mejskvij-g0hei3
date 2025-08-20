import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury living with our exquisite selection of high-end properties. 
                    At HouseIL, we provide a unique blend of elegance and comfort, tailored for 
                    those who appreciate the finer things in life.
                </p>
                <p className="about-description">
                    Our curated listings feature stunning interiors, breathtaking views, and 
                    exceptional amenities, ensuring that your stay is nothing short of extraordinary.
                </p>
                <button className="about-button">Discover More</button>
            </div>
        </section>
    );
};

export default AboutSection;