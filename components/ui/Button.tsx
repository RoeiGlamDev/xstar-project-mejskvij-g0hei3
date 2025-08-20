import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #000; // Black background for elegance
  color: #ff69b4; // Pink text for a luxurious touch
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff69b4; // Pink background on hover
    color: #000; // Black text on hover
  }

  &:focus {
    outline: none; // Remove focus outline
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;