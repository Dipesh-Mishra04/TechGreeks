import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Users, Award, Globe, Camera } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen size={40} className="text-white" />,
      title: "Knowledge Hub",
      desc: "A rich collection of resources, research papers, and study material to empower students and faculty."
    },
    {
      icon: <Code size={40} className="text-white" />,
      title: "Tech Driven",
      desc: "State-of-the-art labs and coding culture to prepare students for modern industry demands."
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "Community",
      desc: "Strong student and alumni community fostering collaboration and growth."
    },
    {
      icon: <Award size={40} className="text-white" />,
      title: "Excellence",
      desc: "Our focus on excellence has led to numerous awards and recognitions over the years."
    },
    {
      icon: <Globe size={40} className="text-white" />,
      title: "Global Outlook",
      desc: "Collaborations with international universities and global exposure opportunities."
    },
    {
      icon: <Camera size={40} className="text-white" />,
      title: "Campus Life",
      desc: "Vibrant campus with cultural events, fests, and an aesthetic atmosphere."
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        About Our College
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 max-w-3xl text-center mb-12"
      >
        We are dedicated to creating a learning ecosystem where innovation meets tradition. With world-class infrastructure, a collaborative environment, and diverse opportunities, our institution ensures holistic development of every student.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:shadow-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-100 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
