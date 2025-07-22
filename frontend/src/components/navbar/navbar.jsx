import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Certificates", id: "certif" },
    { label: "Work", id: "projects" }
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const items = navRef.current.querySelectorAll(".navItems");
    const [logo, ...links] = items;

    gsap.fromTo(
      logo,
      { opacity: 0, y: -50 },
      { opacity: 1, duration: 1, y: 0 }
    );

    gsap.fromTo(
      links,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-outfit font-medium text-blue-800 px-4 sm:px-6 md:px-20 h-16 flex items-center justify-between"
    >
      {/* Logo */}
      <div>
        <p className="navItems text-3xl font-marker cursor-pointer">Afzal</p>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-md">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="navItems relative cursor-pointer group transition"
          >
            <a href={`#${item.id}`} className="hover:text-blue-500 transition">
              {item.label}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full bg-white px-6 py-6 text-blue-800 font-outfit text-lg flex flex-col gap-6 md:hidden shadow-md"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer border-b pb-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
