'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Add any animations or interactions here
  }, []);

  return (
    <Canvas style={{ height: '100vh', backgroundColor: '#000' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh ref={modelRef}>
        {/* Replace with your 3D model */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff69b4" /> {/* Pink color for elegance */}
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;