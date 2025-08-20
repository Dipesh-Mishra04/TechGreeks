import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white cursor-pointer tracking-wide"
        >
          QuizzCrakerz
        </motion.h1>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-10 text-white font-medium text-lg">
          {["Home", "About", "Quizzes", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#FFD700",
                textShadow: "0px 0px 8px #FFD700",
              }}
              className="cursor-pointer transition duration-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFD700",
            color: "#000",
          }}
          className="bg-white text-purple-700 px-5 py-2 rounded-full font-semibold shadow-md transition duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
