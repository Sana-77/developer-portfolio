import "../styles/Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import { SiExpress, SiVite } from "react-icons/si";

function Skills() {
  const skillLevels = [
    {
      icon: <FaReact />,
      name: "React",
      level: "Expert",
      value: 95,
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "Advanced",
      value: 90,
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Expert",
      value: 98,
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "Advanced",
      value: 94,
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: "Advanced",
      value: 90,
    },
    {
      icon: "📱",
      name: "Responsive Design",
      level: "Expert",
      value: 96,
    },
  ];

  return (
    <section className="skills" id="skills">
      {/* ================= Header ================= */}

      <div className="skills-header">
        <span className="section-title">MY SKILLS</span>

        <h2>
          Technologies
          <span> I Work With</span>
        </h2>

        <p>
          I build responsive, scalable and user-friendly web applications using
          modern technologies with a strong focus on clean code, performance and
          exceptional user experience.
        </p>
      </div>

      {/* ================= Main Layout ================= */}

      <div className="skills-wrapper">
        {/* LEFT CARD */}

        <div className="skills-progress">
          <h3>Frontend Development</h3>

          {skillLevels.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <div className="skill-title">
                  <span className="skill-icon">{skill.icon}</span>

                  <div>
                    <h4>{skill.name}</h4>

                    <p>{skill.level}</p>
                  </div>
                </div>

                <span className="skill-percent">{skill.value}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${skill.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT CARD */}

        <div className="tech-card">
          <h3>Technology Stack</h3>

          {/* Frontend */}

          <div className="tech-section">
            <h4>Frontend</h4>

            <div className="tech-chips">
              <span className="tech-chip">
                <FaReact />
                React
              </span>

              <span className="tech-chip">
                <FaJs />
                JavaScript
              </span>

              <span className="tech-chip">
                <FaHtml5 />
                HTML5
              </span>

              <span className="tech-chip">
                <FaCss3Alt />
                CSS3
              </span>

              <span className="tech-chip">
                <FaBootstrap />
                Bootstrap
              </span>
            </div>
          </div>

          <div className="tech-divider"></div>

          {/* Backend */}

          <div className="tech-section">
            <h4>Backend</h4>

            <div className="tech-chips">
              <span className="tech-chip">
                <FaNodeJs />
                Node.js
              </span>

              <span className="tech-chip">
                <SiExpress />
                Express
              </span>

              <span className="tech-chip">REST API</span>
            </div>
          </div>

          <div className="tech-divider"></div>

          {/* Tools */}

          <div className="tech-section">
            <h4>Tools</h4>

            <div className="tech-chips">
              <span className="tech-chip">
                <FaGitAlt />
                Git
              </span>

              <span className="tech-chip">
                <FaFigma />
                Figma
              </span>

              <span className="tech-chip">
                <SiVite />
                Vite
              </span>

              <span className="tech-chip">VS Code</span>
            </div>
          </div>

          <div className="tech-footer">
            <span>🚀 Fast Learner</span>

            <span>✨ Clean Code</span>

            <span>📱 Responsive UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
