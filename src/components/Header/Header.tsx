// Header.tsx

import { Link } from 'react-router-dom';
import { Container } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Container>
  );
};
