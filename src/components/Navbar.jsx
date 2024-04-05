import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navLinks">
          <li onClick={() => navigate("/home")}>Home</li>
          <p>|</p>
          <li onClick={() => navigate("/music")}>Lessons & Performance</li>
          <p>|</p>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
        <i className="fa-solid fa-bars fa-2x" onClick={() => handleClick()}></i>
        <ul className={clicked ? "mobileNavLinks" : "hideMobileNavLinks"}>
          <li
            onClick={() => {
              navigate("/home");
              handleClick();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/music");
              handleClick();
            }}
          >
            Lessons & Performance
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              handleClick();
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
