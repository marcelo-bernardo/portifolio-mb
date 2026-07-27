import { IconArrowUpRight } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__index">{project.id}</span>
        <div className="project-card__tags">
          {project.stack.map((s) => (
            <span key={s} className="project-card__tag">
              {s}
            </span>
          ))}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        Acessar projeto
        <IconArrowUpRight />
      </a>
    </article>
  );
}
