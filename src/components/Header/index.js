import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <div className="box">
          <span className="logo-text">R</span>
        </div>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          About
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          Projects
        </NavLink>
      </nav>
      <div className="contact-form-btn">
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Header;
