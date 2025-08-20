import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // Trigger animation when scrolled down
    } else {
      setScrolling(false); // Reset animation when at top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, []);

  return scrolling; // Return scrolling state
};

export default useScrollAnimation;