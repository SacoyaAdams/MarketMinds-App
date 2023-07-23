import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/marketmind logo.png" alt="logo" />
        MarketMind$
      </div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Markets</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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
}

export default Navbar;
