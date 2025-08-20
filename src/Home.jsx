import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-purple-400">Nirvana 2.0</span>
      </motion.h2>

      {/* 3 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Card 1 */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-purple-500/30 transition border border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-4">
            <Code className="text-purple-400 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center">Hackathons</h3>
          <p className="text-gray-300 text-center">
            Compete with the brightest minds, build solutions, and innovate at lightning speed.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition border border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-4">
            <Lightbulb className="text-pink-400 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center">Workshops</h3>
          <p className="text-gray-300 text-center">
            Learn trending technologies from experts in engaging and hands-on sessions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 transition border border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center mb-4">
            <Rocket className="text-blue-400 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center">Innovation</h3>
          <p className="text-gray-300 text-center">
            Showcase projects, explore ideas, and be part of a future-ready tech revolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;