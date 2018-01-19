import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
