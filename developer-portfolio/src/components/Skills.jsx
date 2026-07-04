import "../styles/Skills.css";
import skills from "../data/skills";
import TechBadge from "./TechBadge";

function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="section-title">MY SKILLS</span>

      <h2>
        Technologies
        <span> I work with</span>
      </h2>

      <div className="skills-grid">
        {skills.map((tech) => (
          <TechBadge key={tech.id} tech={tech} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
