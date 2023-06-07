import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div>
      <h2>Despre mine</h2>
      <p>Scurtă descriere despre tine și abilitățile tale.</p>
      <Link to="/projects">Project</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default About;
