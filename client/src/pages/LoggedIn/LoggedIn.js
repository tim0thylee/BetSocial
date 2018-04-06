
import React from "react";

let LoggedIn = () => (
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
);


export default LoggedIn;
