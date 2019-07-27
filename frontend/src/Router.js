import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <p>Home</p>} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exaact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
export default Router;
