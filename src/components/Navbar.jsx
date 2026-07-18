import "../styles/Navbar.css";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <FaCode className="logo-icon" />
        <span>SANA</span>
        <span className="accent">WAZIRY</span>
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            onClick={closeMenu}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <a href="/Sana-Waziry-CV.pdf" className="cv-btn" download>
          Download CV
        </a>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
