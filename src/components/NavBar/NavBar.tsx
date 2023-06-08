// Header.tsx

import { NavLink } from 'react-router-dom';
import { Container, Paragraph } from './NavBar.styles';

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Paragraph>ceva aici</Paragraph>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Container>
  );
};
