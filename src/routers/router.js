import React from "react";
import Contractors from "../components/pages/em_contractors";
import Legacy from "../components/pages/legacy";
import Home from "../components/pages/home";
import Sentinel from "../components/pages/sentinel";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.router = React.createRef();
    this.pre = document.getElementsByTagName("pre");
  }

  render() {
    if (this.pre) {
      history.push("/");
    }
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" history={history} component={Home} exact={true} />
            <Route
              path="/emcontractors"
              history={history}
              component={Contractors}
            />
            <Route path="/sentinel" history={history} component={Sentinel} />
            <Route path="/legacy" history={history} component={Legacy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
