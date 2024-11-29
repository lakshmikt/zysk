import React from "react";
import "./Navbar.css";
import { IoIosContact } from "react-icons/io"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="navbar-logo">BrandName</a>
      </div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#" className="contact-icon">
        <IoIosContact />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
