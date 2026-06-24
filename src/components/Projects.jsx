import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { FALLBACK_PROJECTS } from "../fallbackData";
import "./Projects.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch(() => {
        setError(true);
        setProjects(FALLBACK_PROJECTS);
      });
  }, []);

  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <span className="section-tag">02 / projects</span>
        <h2>Things I've Built</h2>
      </div>
      {projects === null && <div className="state-msg">// fetching projects from API...</div>}
      {error && (
        <div className="state-msg error">
          // couldn't reach backend API, showing local data instead
        </div>
      )}
      {projects && (
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
