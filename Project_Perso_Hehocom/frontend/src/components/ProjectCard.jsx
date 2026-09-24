function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              Code source ↗
            </a>
          )}

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Voir le projet ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;