import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // mobile menu close ho jaye click ke baad
    }
  };

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400 cursor-pointer" onClick={() => handleClick("home")}>
          Nirvana 2.0
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("home")}>Home</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("events")}>Events</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("gallery")}>Gallery</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("about")}>About</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("contact")}>Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-1 bg-white mb-1"></span>
          <span className="w-6 h-1 bg-white mb-1"></span>
          <span className="w-6 h-1 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black flex flex-col space-y-4 p-4 text-lg">
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("home")}>Home</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("events")}>Events</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("gallery")}>Gallery</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("about")}>About</li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => handleClick("contact")}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;