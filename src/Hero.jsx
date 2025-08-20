import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">

      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[150px] -top-32 -left-32"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] bottom-0 right-0"></div>


      <div className="relative z-10 text-center px-6">
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-purple-400">Your World</span>
        </motion.h1>

        <motion.p 
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Experience the future of web design with 3D magic and smooth animations.
        </motion.p>

        <motion.button 
          className="mt-10 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-2xl shadow-lg transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>


      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.2, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#9333ea"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
              />
            </Sphere>
          </Float>
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
}
