import React, { useState } from "react";
import "./NavbarStyles.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">DataVista</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="submenu-container">
          <a href="#about">About Us</a>
          <ul className="submenu">
            <li><a href="#web">Details</a></li>
          </ul>
        </li>
        <li className="submenu-container">
          <a href="#services">Services</a>
          <ul className="submenu">
            <li><a href="#web">Web Development</a></li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
