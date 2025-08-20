'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const particles: Array<{ x: number; y: number; radius: number; color: string; }> = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 5 + 1,
                color: `rgba(255, 105, 180, ${Math.random()})`, // Pink color
            });
        }

        const drawParticles = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                context.beginPath();
                context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                context.fillStyle = particle.color;
                context.fill();
                context.closePath();
            });
        };

        const animateParticles = () => {
            drawParticles();
            requestAnimationFrame(animateParticles);
        };

        animateParticles();
        
        return () => {
            // Cleanup if necessary
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Background layer
        />
    );
};

export default ParticleBackground;