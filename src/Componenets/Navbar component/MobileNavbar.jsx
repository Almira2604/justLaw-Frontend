import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MobileNavbar = ({ setIsNavbarOpen, navItems }) => {
  return (
    <div className="fixed inset-0 bg-[#0B1F3A] flex flex-col items-center justify-center gap-7 z-[60] px-6">

      {/* Close button */}
      <button
        onClick={() => setIsNavbarOpen(false)}
        className="absolute top-5 right-5 p-2 text-[#F8F5EF] text-2xl hover:text-white transition-colors"
        aria-label="Close menu"
      >
        <FaTimes />
      </button>

      {/* Mobile Logo / Brand Area */}
      <div className="absolute top-6 left-6">
        <span className="text-[#F8F5EF] text-sm font-semibold tracking-[0.2em] uppercase">
          Law Books
        </span>
      </div>

      {/* Nav Links */}
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          onClick={() => setIsNavbarOpen(false)}
          className={({ isActive }) =>
            `uppercase tracking-widest text-sm sm:text-base font-semibold transition-colors ${
              isActive
                ? "text-[#F8F5EF]"
                : "text-white/70 hover:text-[#F8F5EF]"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}

      {/* Decorative line */}
      <div className="absolute bottom-10 w-16 h-px bg-[#F8F5EF]/40" />
    </div>
  );
};

export default MobileNavbar;