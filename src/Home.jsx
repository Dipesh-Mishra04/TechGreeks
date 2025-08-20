import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Lightbulb,
  Rocket,
  FlaskConical,
  Gamepad2,
  Store,
  TerminalSquare,
  Award,
  Map,
} from "lucide-react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950 -z-20"></div>

      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-purple-400">Nirvana 2.0</span>
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {[
          {
            icon: <Code className="text-purple-400 w-12 h-12" />,
            title: "Hackathons",
            desc: "Compete with the brightest minds, build solutions, and innovate at lightning speed.",
            glow: "hover:shadow-purple-500/40",
          },
          {
            icon: <Lightbulb className="text-pink-400 w-12 h-12" />,
            title: "Workshops",
            desc: "Learn trending technologies from experts in engaging and hands-on sessions.",
            glow: "hover:shadow-pink-500/40",
          },
          {
            icon: <Rocket className="text-blue-400 w-12 h-12" />,
            title: "Innovation",
            desc: "Showcase projects, explore ideas, and be part of a future-ready tech revolution.",
            glow: "hover:shadow-blue-500/40",
          },
          {
            icon: <FlaskConical className="text-green-400 w-12 h-12" />,
            title: "Science Exhibitions",
            desc: "Explore groundbreaking projects and witness creativity at its peak.",
            glow: "hover:shadow-green-500/40",
          },
          {
            icon: <Gamepad2 className="text-yellow-400 w-12 h-12" />,
            title: "Gaming Events",
            desc: "Compete in thrilling gaming challenges and show off your skills.",
            glow: "hover:shadow-yellow-500/40",
          },
          {
            icon: <Store className="text-red-400 w-12 h-12" />,
            title: "Student Stalls",
            desc: "Enjoy food, fun, and creative stalls put up by students.",
            glow: "hover:shadow-red-500/40",
          },
          {
            icon: <TerminalSquare className="text-cyan-400 w-12 h-12" />,
            title: "Coding Competitions",
            desc: "Test your coding skills against peers and solve challenging problems.",
            glow: "hover:shadow-cyan-500/40",
          },
          {
            icon: <Award className="text-indigo-400 w-12 h-12" />,
            title: "Python Certification",
            desc: "Earn certification in Python programming and boost your career prospects.",
            glow: "hover:shadow-indigo-500/40",
          },
          {
            icon: <Map className="text-orange-400 w-12 h-12" />,
            title: "Treasure Hunt",
            desc: "Embark on an adventurous treasure hunt filled with clues and excitement.",
            glow: "hover:shadow-orange-500/40",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 transition ${card.glow}`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-gray-300 text-center">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
