import "./Nav.css"
import React from "react";
import Auth from '../../utils/Auth'
// import LoggedIn from './LoggedIn/LoggedIn'

let Nav = () => (
      Auth.isUserAuthenticated() ? (
    <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Bet Social!
        </a>
        <a href="/users" className="navbar-brand">
          Users
</a>
        <a href="/logout" className="navbar-brand dropdown-menu-right">
          Logout
        </a>
        </div>
        </div>
        </nav>
      ) : (
         <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Bet Social!
        </a>
        <a href="/users" className="navbar-brand">
          Users
        </a>
        <a href="/login" className="navbar-brand">
          Login
        </a>
        <a href="/register" className="navbar-brand">
          Register
        </a>
        <a href="/logout" className="navbar-brand dropdown-menu-right">
          Logout
        </a>
        <a href="/activity" className="navbar-brand">
          Activity
        </a>
        <a href="/friends" className="navbar-brand">
          Friends
        </a>
      </div>
    </div>
  </nav>
          
      )
    )

export default Nav;
