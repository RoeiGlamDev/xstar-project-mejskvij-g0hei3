import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'An unforgettable experience! The ambiance was simply luxurious.',
    image: '/images/testimonial1.jpg', // Path to image
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'A perfect getaway. The decor and service were top-notch!',
    image: '/images/testimonial2.jpg', // Path to image
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'Absolutely stunning! I felt like royalty during my stay.',
    image: '/images/testimonial3.jpg', // Path to image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="guest-name">{testimonial.name}</h3>
            <p className="guest-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;