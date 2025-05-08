import logo from "/images/logo.png";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Work", "About", "Blog", "Contact"];

  return (
    <header className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-[1140px] z-50 text-white rounded-[80px]  font-[DM_Sans]">
      <nav className="w-full px-4 md:px-6 py-4 flex flex-wrap justify-between items-center rounded-[80px] border-blue-800 backdrop-blur-md bg-white/10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-9.5" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-4 py-4 rounded-b-[40px]">
          <ul className="flex flex-col space-y-4 text-center text-sm font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
