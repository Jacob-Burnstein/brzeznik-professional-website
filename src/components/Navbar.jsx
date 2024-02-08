import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navLinks">
        <li>Home</li>
        <p>|</p>
        <li>Psychotherapy</li>
        <p>|</p>
        <li>Lessons & Performance</li>
        <p>|</p>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
