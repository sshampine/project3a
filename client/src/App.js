import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Public from "./pages/Public";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute"

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
