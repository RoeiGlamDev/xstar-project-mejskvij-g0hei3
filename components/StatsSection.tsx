import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">500+</h2>
                <p className="stat-description">Luxury Homes</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">1000+</h2>
                <p className="stat-description">Happy Guests</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">300+</h2>
                <p className="stat-description">5-Star Reviews</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">50+</h2>
                <p className="stat-description">Exclusive Locations</p>
            </div>
        </section>
    );
};

export default StatsSection;