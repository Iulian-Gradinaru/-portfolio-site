// Header.tsx

import { NavLink } from 'react-router-dom';
import { Container, Paragraph, CustomNavLink } from './NavBar.styles';

export const NavBar: React.FC = () => {
  // const location = useLocation();
  return (
    <Container>
      <Paragraph>ceva aici</Paragraph>
      <CustomNavLink to="/" isActive={() => true}>
        Home
      </CustomNavLink>

      {/* <CustomNavLink to="/">Home</CustomNavLink> */}
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Container>
  );
};
