import "../styles/Hero.css";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";
import profile from "../assets/images/profile.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaBriefcase,
  FaAward,
  FaCoffee,
} from "react-icons/fa";

function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "Web Developer",
        "React Developer",
        "Computer Science Graduate",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home">
      {/* ================= LEFT ================= */}

      <div className="hero-left">
        <span className="badge">👋 Hi, I'm Sana</span>

        <h2>SANA WAZIRY</h2>

        <h3>
          <span ref={typingRef}></span>
        </h3>

        <p>
          I build modern, responsive, and user-friendly websites using React,
          JavaScript, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="primary-btn"
          >
            View My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="secondary-btn"
          >
            Contact Me
          </Link>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Sana-77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sana-waziry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:wazirysana@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="hero-right">
        <div className="image-card">
          <img src={profile} alt="Sana Waziry" />
        </div>

        <div className="stats">
          <div className="stat-card">
            <FaCode />
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <FaBriefcase />
            <h3>10+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <FaAward />
            <h3>5+</h3>
            <p>Certificates</p>
          </div>

          <div className="stat-card">
            <FaCoffee />
            <h3>∞</h3>
            <p>Cups of Coffee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
