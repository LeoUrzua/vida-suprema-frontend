import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import ButtonAppBar from './components/ButtonAppBar';
import GoalsForm from './components/GoalsForm';
import {ProvideAuth as ProvideUser} from './utils/Auth/useAuth';
import {ProvideADM} from './utils/access-decision-manager-react/src/access-decision-manager-provider';

const App: React.FC = () => {
  return (
      <ProvideUser>
          <ProvideADM>
              <Router>
                  <ButtonAppBar />
                  {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                  <Switch>
                      <Route path="/goals">
                          <Goals />
                      </Route>
                      <Route path="/goals/add">
                          <GoalsForm/>
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </Router>
          </ProvideADM>
      </ProvideUser>

  );
}

export default App;
