import "./Nav.css";
import React from "react";
import Auth from '../../utils/Auth';
import Tablist from '../Tablist';
import MainImage from "../MainImage";
import PaperSheet from "../Paper";

let user = Auth.getUser();

let Nav = () => (
      Auth.isUserAuthenticated() ? (
  <div>
    <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand">
          Welcome {user}!
        </div>     
        <a href="/logout" className="navbar-brand dropdown-menu-right">
          Logout
        </a>
      </div>
      </div>
    </nav>
  <div>
      <MainImage />
      <Tablist />
  </div>
  </div>
      ) : (
      <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Bet Social!
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
