import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "./containers";
import Logs from "./components/Logs";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/logs" component={Logs} />
  </Switch>
);

export default Routes;
