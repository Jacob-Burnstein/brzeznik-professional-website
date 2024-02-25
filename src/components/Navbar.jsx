import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="navLinks">
        <li onClick={() => navigate("/home")}>Home</li>
        <p>|</p>
        <li onClick={() => navigate("/music")}>Lessons & Performance</li>
        <p>|</p>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
