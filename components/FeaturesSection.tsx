import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxurious Accommodations',
    description: 'Experience the epitome of luxury with our premium properties.',
  },
  {
    title: 'Personalized Services',
    description: 'Enjoy tailored services to make your stay unforgettable.',
  },
  {
    title: 'Prime Locations',
    description: 'Stay in the heart of the city with stunning views.',
  },
  {
    title: 'Exclusive Amenities',
    description: 'Indulge in high-end amenities designed for your comfort.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;