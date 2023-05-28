// import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { BsSearch, BsSunFill, BsFillMoonFill } from "react-icons/bs";

// import { BsFillMoonFill } from "react-icons/bs";
const Navbar = () => {

    //DARK MODE

    // const [theme, setTheme] = useState("dark");
    
    // useEffect(() => {
    //   document.documentElement.setAttribute("data-theme", theme);
    // }, [theme]);
  
    // const toggleTheme = () => {
    //   if (theme === "light") {
    //     setTheme("dark");       
    //   } else {
    //     setTheme("light");
    //   }
    // };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link active" to="/">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link " to="/resume">
              Resume
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link " to="/portfolio">
              Portfolio
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link className="navbar-link " to="/blog">
              Blog
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link className="navbar-link " to="/certificate">
              Certificates
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link " to="/contact">
              Contact
            </Link>
          </li>
          {/* <li className="navbar-item">
          <button onClick={() => toggleTheme()} className="theme-btn icon-btn">
            <BsSunFill className="material-symbols-rounded sun-icon" />
            <BsFillMoonFill className="material-symbols-rounded moon-icon" />
          </button>          
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
