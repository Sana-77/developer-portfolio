import "../styles/About.css";
import { FaPalette, FaDesktop, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-title">ABOUT ME</span>

        <h2>
          Turning ideas into
          <span> digital reality</span>
        </h2>

        <p>
          I'm a Computer Science graduate and web developer passionate about
          creating clean, responsive and user-friendly web applications.
        </p>

        <p>
          I enjoy learning new technologies, solving real-world problems, and
          continuously improving my skills through hands-on projects.
        </p>

        <button className="about-btn">More About Me →</button>
      </div>

      <div className="about-right">
        <div className="feature-card">
          <FaPalette />

          <h3>Modern Design</h3>

          <p>Clean interfaces focused on great user experience.</p>
        </div>

        <div className="feature-card">
          <FaDesktop />

          <h3>Responsive Layout</h3>

          <p>Optimized for desktop, tablet and mobile devices.</p>
        </div>

        <div className="feature-card">
          <FaRocket />

          <h3>Performance</h3>

          <p>Fast loading, maintainable and scalable applications.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
