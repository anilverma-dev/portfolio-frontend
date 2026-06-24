function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="file-tag">📁 {project.title.toLowerCase().replace(/\s+/g, "-")}.project</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          ↗ Live Site
        </a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          ⌥ Source Code
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
