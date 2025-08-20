import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      
      {/* 🔥 Background animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-30 blur-3xl"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -200, 200, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-600 opacity-30 blur-3xl"
          animate={{
            x: [0, -200, 200, 0],
            y: [0, 200, -200, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />
      </div>

      {/* 🔥 Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg p-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
