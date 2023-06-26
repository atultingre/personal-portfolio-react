import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
