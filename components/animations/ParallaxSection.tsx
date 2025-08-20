'use client';

import React, { useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const scrollY = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust the parallax effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-section" ref={parallaxRef}>
            <div className="content">
                <h1>Welcome to HouseIL</h1>
                <p>Experience luxury living in the heart of the city.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;