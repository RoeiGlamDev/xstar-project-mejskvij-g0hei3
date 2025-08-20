'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      opacity: 0,
    });

    sr.reveal('.reveal', {
      interval: 200, // delay between reveals
    });
  }, []);

  return <div className="reveal">{children}</div>;
};

export default ScrollRevealComponent;