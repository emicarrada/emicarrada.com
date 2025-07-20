import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, SoftShadows, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

const GlassesModel = React.memo(function GlassesModel(props) {
  const ref = useRef();
  const { scene } = useGLTF('/models/glasses.glb');
  return <primitive ref={ref} object={scene} {...props} />;
});

export function Canvas3D({ small = false, evenSmaller = false, large = false, medium = false }) {
  const [canvasError, setCanvasError] = useState(false);
  // Definir el scale base según las props
  const getInitialScale = () => {
    if (large) return [0.07, 0.07, 0.07];
    if (medium) return [0.045, 0.045, 0.045];
    if (evenSmaller) return [0.012, 0.012, 0.012];
    if (small) return [0.018, 0.018, 0.018];
    return [0.05, 0.05, 0.05];
  };
  const [scale, setScale] = useState(getInitialScale());
  const controlsRef = useRef();
  const [loaded, setLoaded] = useState(false);

  // Responsividad: ajustar scale según tamaño de pantalla y props
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (large) {
        if (width < 640) setScale([0.045, 0.045, 0.045]); // móvil
        else if (width < 1024) setScale([0.06, 0.06, 0.06]); // tablet
        else setScale([0.07, 0.07, 0.07]); // desktop
      } else if (medium) {
        if (width < 640) setScale([0.03, 0.03, 0.03]); // móvil
        else if (width < 1024) setScale([0.04, 0.04, 0.04]); // tablet
        else setScale([0.045, 0.045, 0.045]); // desktop
      } else if (evenSmaller) {
        if (width < 640) setScale([0.008, 0.008, 0.008]); // móvil
        else if (width < 1024) setScale([0.01, 0.01, 0.01]); // tablet
        else setScale([0.012, 0.012, 0.012]); // desktop
      } else if (small) {
        if (width < 640) setScale([0.012, 0.012, 0.012]); // móvil
        else if (width < 1024) setScale([0.015, 0.015, 0.015]); // tablet
        else setScale([0.018, 0.018, 0.018]); // desktop
      } else {
        if (width < 640) setScale([0.03, 0.03, 0.03]); // móvil
        else if (width < 1024) setScale([0.04, 0.04, 0.04]); // tablet
        else setScale([0.05, 0.05, 0.05]); // desktop
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [small, evenSmaller, large, medium]);

  // Centrar el modelo exactamente en el canvas
  const modelPosition = [0, 0, 0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="w-full h-full bg-[#041737] flex items-center justify-center"
      style={{ position: 'relative' }}
    >
      <Suspense fallback={<div className="loader" style={{color: 'white', textAlign: 'center', padding: '2rem'}}>Cargando modelo 3D...</div>}>
        <Canvas
          shadows
          dpr={1}
          camera={{ position: [0, 0, 2], fov: 30 }}
          className="w-full h-full"
          style={{ width: '100%', height: '100%', background: '#041737' }}
          onCreated={() => setLoaded(true)}
        >
          <color attach="background" args={["#041737"]} />
          <SoftShadows size={25} samples={40} focus={0.95} />
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[2, 4, 2]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0005}
          />
          <mesh receiveShadow position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[4, 4]} />
            <shadowMaterial opacity={0.18} />
          </mesh>
          <GlassesModel scale={scale} position={modelPosition} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.08}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}

