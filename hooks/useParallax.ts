import { useEffect, useState } from 'react';

const useParallax = (scrollSpeed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY * scrollSpeed); // Calculate offset based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    return offset; // Return the calculated offset
};

export default useParallax;