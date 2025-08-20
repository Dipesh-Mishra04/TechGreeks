import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const images = [
  "/IMG_5632.JPG",
  "/DSC_8134.JPG",
  "/DSC03314.JPG",
  "/IMG_9172.JPG",
  "/IMG_9233.JPG",
  "/IMG_9238.JPG",
  "/DSC_7747.JPG",
  "/DSC_7768.JPG",
  "/DSC_7784.JPG",
  "/DSC_7786.JPG",
  "/IMG_5663.JPG",
  "/DSC_8053.JPG",
  "/DSC03269.JPG",
  "/IMG_9173.JPG",
  "/IMG_9476.JPG",
  "/DSC_7619.JPG",
  "/DSC_7625.JPG",
  "/IMG_5519.JPG",
  "/IMG_5501.JPG",
  "/IMG_5527.JPG",
  "/DSC_7585.JPG",
];

const Gallery = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Particles
    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.01, color: "#ffffff" });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 3;

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup (SAFE)
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Three.js background */}
      <div ref={mountRef} className="absolute inset-0 -z-10" />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our <span className="text-purple-400">Gallery</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
