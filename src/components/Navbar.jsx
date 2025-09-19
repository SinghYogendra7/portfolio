import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight the active section
      let current = 'home';
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = sections.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`hover:text-indigo-400 transition ${
        activeSection === id ? 'text-indigo-400' : 'text-gray-200'
      }`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  ));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-gray-900/90 shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-indigo-400 font-bold text-xl">Yogendra Singh</span>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 text-sm">{navLinks}</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-200 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 text-sm">
          {navLinks}
        </div>
      )}
    </motion.nav>
  );
}
