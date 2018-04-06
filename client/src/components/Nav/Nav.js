import "./Nav.css"
import React from "react";
import Auth from '../../utils/Auth'

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
        <a href="/bets" className="navbar-brand">
          Bets
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
        <a href="/bets" className="navbar-brand">
          Bets
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
      </div>
    </div>
  </nav>
          
      )
    )

export default Nav;
