// src/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Page 1</Link></li>
        <li><Link to="/features">Page 2</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;