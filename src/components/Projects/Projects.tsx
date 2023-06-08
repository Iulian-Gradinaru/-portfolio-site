import { Link } from 'react-router-dom';
import { ProjectCard } from '../ProjectsCard';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'link-to-image-1.jpg',
      technologies: ['React.js', 'CSS'],
      link: 'link-to-project-1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'link-to-image-2.jpg',
      technologies: ['React.js', 'HTML', 'CSS'],
      link: 'link-to-project-2',
    },
    // ... and so on
  ];

  const renderProjects = () => {
    return projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ));
  };

  return (
    <div>
      <h2>Proiecte</h2>
      <h3>
        These projects demonstrate my expertise with practical examples of some
        of my work, including brief descriptions and links to code repositories.
        They showcase my ability to tackle complex challenges, adapt to diverse
        technologies, and effectively oversee projects.
      </h3>
      {renderProjects()}
      <Link to="/">Back to About</Link>
    </div>
  );
};

export default Projects;
