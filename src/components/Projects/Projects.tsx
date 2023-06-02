import { Link } from 'react-router-dom';
import { ProjectCard } from '../ProjectsCard';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Proiect 1',
      description: 'Descriere proiect 1',
      image: 'link-catre-imagine-1.jpg',
      technologies: ['React.js', 'CSS'],
      link: 'link-catre-proiect-1',
    },
    {
      title: 'Proiect 2',
      description: 'Descriere proiect 2',
      image: 'link-catre-imagine-2.jpg',
      technologies: ['React.js', 'HTML', 'CSS'],
      link: 'link-catre-proiect-2',
    },
    // ... și așa mai departe
  ];

  return (
    <section>
      <h2>Proiecte</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <Link to="/">Înapoi la despre</Link>
    </section>
  );
};

export default Projects;
