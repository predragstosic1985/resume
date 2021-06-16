import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import WebSite from "./WebSite";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/resume" component={WebSite} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LoginPage} />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
