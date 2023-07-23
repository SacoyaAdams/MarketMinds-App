import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">Your Logo</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
