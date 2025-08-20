// App.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx"
import Events from "./Events.jsx"
import Gallery from "./Gallery.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Home/>
      <Events/>
      <Gallery/>
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
}
