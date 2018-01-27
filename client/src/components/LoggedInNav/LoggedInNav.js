import React from "react";

const LoggedInNav = props => 

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
      
      {/* {props.dashboard ? (
            <li><a href="/dashboard"><span className="glyphicon glyphicon-log-out"></span>Dashboard</a></li>
          ) : (
            <li><a href="/profile"><span className="glyphicon glyphicon-log-out"></span>Profile</a></li>
        )} */}
        <li><a href="/dashboard"><span className="glyphicon glyphicon-home"></span>Dashboard</a></li>
        <li><a href="/profile"><span className="glyphicon glyphicon-user"></span>Profile</a></li>
        <li><a href="/logout"><span className="glyphicon glyphicon-log-out"></span>Log Out</a></li>
      </ul>
    </div>
  </nav>


export default LoggedInNav;