import React from "react";
import "./navbar.css";
import MMImage from "./MMLogo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container">

      <Link to="/">
        <button className="logo">
          <img src={MMImage} alt="Logo" />
        </button>
      </Link>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/Markets">Markets</Link>
          </li>
          <li>
            <Link to="/BlogPage">Blogs</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


