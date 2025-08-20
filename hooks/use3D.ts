import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Initialize WebGL context and load 3D model
    const loadModel = async () => {
      const response = await fetch(modelUrl);
      const modelData = await response.arrayBuffer();
      // Logic to handle model data and render it
    };

    loadModel();

    return () => {
      // Cleanup resources if needed
    };
  }, [modelUrl]);

  return canvasRef; // Return canvasRef for rendering in component
};

export default use3D;