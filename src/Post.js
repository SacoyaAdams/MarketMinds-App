import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='logo'>
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
