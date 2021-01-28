import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/descobrir">
        <Discover />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
