'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: pink;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} active={index === currentIndex}>
          <SlideImage src={image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <NextButton onClick={nextSlide}>❯</NextButton>
    </SliderContainer>
  );
};

export default Slider;