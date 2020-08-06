import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../layouts/Layout";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  </Router>
);
export default AppRouter;
