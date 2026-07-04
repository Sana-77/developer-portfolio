import "../styles/Hero.css";
import { useEffect, useRef } from "react";
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
          <button className="primary-btn">View My Work</button>
          <button className="secondary-btn">Contact Me</button>
        </div>

        <div className="social-links">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaEnvelope />
          </a>
        </div>
      </div>

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
