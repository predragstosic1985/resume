import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import WebSite from "./WebSite";
import Projects from "./Projects";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/resume" component={WebSite} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LoginPage} />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
