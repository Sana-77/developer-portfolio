import "../styles/TechBadge.css";

function TechBadge({ tech }) {
  const Icon = tech.icon;

  return (
    <div className="tech-card">
      <Icon className="tech-icon" style={{ color: tech.color }} />

      <h3>{tech.name}</h3>
    </div>
  );
}

export default TechBadge;
