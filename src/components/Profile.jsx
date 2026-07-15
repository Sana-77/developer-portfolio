import "../styles/Profile.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Profile() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="greeting">👋 Hi, I'm Sana</span>

        <h1>SANA WAZIRY</h1>

        <h2>Web Developer</h2>

        <p>
          I build modern, responsive and user-friendly websites using React,
          JavaScript and modern web technologies.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View My Work</button>

          <button className="secondary-btn">Contact Me</button>
        </div>

        <div className="social-icons">
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
        <img src="/profile.png" alt="Sana" />
      </div>
    </section>
  );
}

export default Profile;
