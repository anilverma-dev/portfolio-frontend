function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="file-tag">
        📁 {project.title.toLowerCase().replace(/\s+/g, "-")}.project
      </div>
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
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            ⌥ Source Code
          </a>
        )}
        {project.repoFrontend && (
          <a
            href={project.repoFrontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌥ Frontend Code
          </a>
        )}
        {project.repoBackend && (
          <a
            href={project.repoBackend}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌥ Backend Code
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
