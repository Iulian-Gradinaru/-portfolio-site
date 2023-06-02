export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface ProjectCardProps {
  project: Project;
}
