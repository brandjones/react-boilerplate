import React         from 'react';
import EMContractorsPage from '../components/EM_Contractors/EMContractorsPage'
import LegacyPage from '../components/Legacy_School/LegacyPage';
import HomePage   from '../components/HomePage';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
      <div>
        <Switch>
          <Route  path='/'           component={HomePage} exact={true}/>
          <Route  path='/emcontractors'  component={EMContractorsPage} />
          <Route  path='/legacy'  component={LegacyPage} />
        </Switch>
      </div>
  </Router>
);


export default AppRouter;
