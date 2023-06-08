import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

import { Container } from './App.styles';

export const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/projects" render={Projects} />
          <Route exact path="/contact" render={Contact} />
        </Switch>
      </Container>
    </Router>
  );
};
