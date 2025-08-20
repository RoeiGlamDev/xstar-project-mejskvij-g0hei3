import React from 'react';
import './Card.css'; // Importing CSS for styling

interface CardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <span className="card-price">{price}</span>
      </div>
    </div>
  );
};

export default Card;