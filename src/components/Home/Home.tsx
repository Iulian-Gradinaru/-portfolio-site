import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';
import { Container } from './Home.styles';

export const Home: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Container>
        <Switch>
          <Route exact path="/" render={About} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </Container>
    </Router>
  );
};
