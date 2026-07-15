import "../styles/Navbar.css";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaCode className="logo-icon" />
        <span>SANA</span>
        <span className="accent">WAZIRY</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
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
          >
            Contact
          </Link>
        </li>
      </ul>

      <a href="/Sana-Waziry-CV.pdf" className="cv-btn" download>
        Download CV
      </a>
    </nav>
  );
}

export default Navbar;
