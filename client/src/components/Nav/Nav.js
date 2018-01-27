import React from "react";
import { Link } from "react-router-dom";

const Nav = () => 

<nav className="navbar navbar-top navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          urBIT
        </a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</a></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
      </ul>
    </div>
  </nav>


export default Nav;


