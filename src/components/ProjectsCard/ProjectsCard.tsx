import { ProjectCardProps } from './ProjectsCard.types';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      <a href={project.link}>Vezi proiectul</a>
    </div>
  );
};
