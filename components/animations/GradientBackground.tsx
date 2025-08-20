import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-color: #000000; // Black
  }
  50% {
    background-color: #ff007f; // Pink
  }
  100% {
    background-color: #000000; // Black
  }
`;

const GradientBackgroundContainer = styled.div`
  animation: ${gradientAnimation} 10s ease infinite; // Animation duration and easing
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; // Behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />;
};

export default GradientBackground;