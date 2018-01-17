import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
