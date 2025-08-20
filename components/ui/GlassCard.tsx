import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent background
  border-radius: 15px; // rounded corners
  backdrop-filter: blur(10px); // glass effect
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); // shadow for depth
  color: #fff; // text color
`;

const Title = styled.h2`
  font-size: 24px; // title font size
  margin: 0 0 10px; // margin below title
`;

const Description = styled.p`
  font-size: 16px; // description font size
  margin: 0; // no margin
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;