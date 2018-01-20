import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import "./AuthButton.css";


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AuthButton = withRouter(({ history }) => (
	  fakeAuth.isAuthenticated ? (
	    <p>
	      Welcome! <button onClick={() => {
	        fakeAuth.signout(() => history.push('/'))
	      }}>Sign out</button>
	    </p>
	  ) : (
	  <button onClick={() => {
	        fakeAuth.signout(() => history.push('/'))
	      }}>Sign In</button>
	  )
	)
)

export default AuthButton;