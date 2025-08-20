import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[150px] -top-32 -left-32"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] bottom-0 right-0"></div>

      {/* Text Section */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-purple-400">NIRVANA TECH FEST 2.0</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-purple-400">Hackathons</span> • 
          <span className="text-pink-400"> Workshops</span> • 
          <span className="text-blue-400"> Innovation</span>
        </motion.p>

        {/* Button */}
        <motion.button 
          className="mt-10 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* 3D Sphere & Background */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          {/* Stars Background */}
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={2} />

          {/* Main Floating Sphere */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.2, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#9333ea"
                distort={0.4}
                speed={2}
                roughness={0.2}
              />
            </Sphere>
          </Float>

          {/* Extra Floating Small Spheres */}
          <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[0.3, 64, 64]} position={[-2, 1, -1]}>
              <MeshDistortMaterial color="#ec4899" distort={0.6} speed={2} />
            </Sphere>
          </Float>
          <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
            <Sphere args={[0.25, 64, 64]} position={[2, -1, -1]}>
              <MeshDistortMaterial color="#3b82f6" distort={0.5} speed={2} />
            </Sphere>
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
}