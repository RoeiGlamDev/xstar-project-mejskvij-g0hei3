import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="pink" />
      <OrbitControls />
      {/* Add your 3D models here */}
    </Canvas>
  );
};

export default Scene3D;