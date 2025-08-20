import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black; // Background color for luxury feel
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: pink; // Elegant pink color
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement />
      <FloatingElement style={{ left: '50%', top: '20%' }} />
      <FloatingElement style={{ right: '20%', bottom: '30%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;