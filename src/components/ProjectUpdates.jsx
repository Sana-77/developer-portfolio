import { useState, useEffect } from "react";
import "../styles/ProjectUpdates.css";

function ProjectUpdate() {
  const updates = [
    "🚀 Portfolio deployed successfully.",
    "✨ Added Theme Toggle.",
    "📱 Mobile responsiveness improved.",
    "⭐ Feedback Wall completed.",
    "📬 Contact form now saves drafts.",
    "🎨 Skills section redesigned.",
    "⚡ Performance optimized.",
  ];

  const [currentUpdate, setCurrentUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-update">
      <span className="live-dot"></span>

      <div className="project-update-content">
        <h4>Latest Project Update</h4>
        <p>{updates[currentUpdate]}</p>
      </div>
    </div>
  );
}

export default ProjectUpdate;
