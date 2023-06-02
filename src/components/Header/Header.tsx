// Header.tsx

import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>Portofoliu</h1>
      <nav>
        <Link to="/">Despre</Link>
        <Link to="/projects">Proiecte</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
