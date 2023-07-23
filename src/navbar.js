import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">MARKETMIND$</div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Markets</Link>
          </li>
          <li>
            <Link to="/>">Blogs</Link>
          </li>
          <li>
            <Link to="/>">Watchlist</Link>
          </li>
          <li>
            <Link to="/>">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
