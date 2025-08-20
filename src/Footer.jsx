import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-black-600 via-purple-900 to-black-900 text-gray-300 ">
      <div className="relative z-10 border-t border-gray-700 text-center text-black-600 pt-2 py-2 text-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 md:mt-0"

        >
        <a href="#" className="text-gray-400 hover:text-white transition text-3xl">
            <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition text-3xl">
            <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-sky-400 transition text-3xl">
            <FaTwitter />
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-400 transition text-3xl">
            <FaInstagram />
        </a>

        </motion.div>

        © {new Date().getFullYear()} QuizzCrakerz. All Rights Reserved.
      </div>
    </footer>
  );
}
