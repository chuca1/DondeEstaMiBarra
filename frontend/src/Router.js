import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile.components/Profile";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/Landing ";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exaact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
export default Router;
