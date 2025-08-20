import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Standard Suite</h3>
                        <p className="card-price">$200/night</p>
                        <ul className="card-features">
                            <li>1 King Bed</li>
                            <li>Complimentary Breakfast</li>
                            <li>Free Wi-Fi</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Suite</h3>
                        <p className="card-price">$350/night</p>
                        <ul className="card-features">
                            <li>2 Queen Beds</li>
                            <li>Ocean View</li>
                            <li>Private Balcony</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Presidential Suite</h3>
                        <p className="card-price">$600/night</p>
                        <ul className="card-features">
                            <li>3 Bedrooms</li>
                            <li>Personal Concierge</li>
                            <li>Luxury Spa Access</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;