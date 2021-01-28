import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Details from "./../pages/Details/index";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/movie/details/:id">
        <Details />
      </Route>
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
