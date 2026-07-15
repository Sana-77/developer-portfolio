import "../styles/About.css";
import { FaLaptopCode, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-title">ABOUT ME</span>

        <h2>
          Building <span>modern web experiences</span>
        </h2>

        <p>
          I'm a Computer Science graduate and Frontend Developer passionate
          about creating beautiful, responsive and high-performance web
          applications using modern technologies.
        </p>

        <div className="about-highlights">
          <div>
            <FaCheckCircle />
            <span>React Development</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Responsive Design</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>REST API Integration</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>UI / UX Focused</span>
          </div>
        </div>

        <div className="about-actions">
          <button className="primary-btn">Download CV</button>
          <button className="secondary-btn">View Projects</button>
        </div>
      </div>

      <div className="about-right">
        <div className="profile-card">
          <div className="profile-header">
            <FaLaptopCode />

            <div>
              <h3>Frontend Developer</h3>
              <p>React • JavaScript • CSS</p>
            </div>
          </div>

          <div className="skill">
            <span>React</span>

            <div className="progress">
              <div style={{ width: "92%" }} />
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>

            <div className="progress">
              <div style={{ width: "88%" }} />
            </div>
          </div>

          <div className="skill">
            <span>CSS</span>

            <div className="progress">
              <div style={{ width: "94%" }} />
            </div>
          </div>

          <div className="skill">
            <span>React UI</span>

            <div className="progress">
              <div style={{ width: "90%" }} />
            </div>
          </div>

          <div className="stats-row">
            <div>
              <h2>2+</h2>
              <span>Years</span>
            </div>

            <div>
              <h2>10+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>5+</h2>
              <span>Certificates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
