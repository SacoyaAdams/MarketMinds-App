import React from "react";
import "./navbar.css";
//import DDImage from "./DDLogo.png";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/marketmind logo.png"/>
        MarketMind$
      </div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Markets</Link>
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


//       <div className="navButtons">
//         <button className="navButton">
//           <Link to="/membersgallery">Members Gallery</Link>
//         </button>
//         <button className="navButton">
//           <Link to="/aboutus">About Us</Link>
//         </button>
//         <button className="navButton">
//           <Link to="/contact">Contact</Link>
//         </button>
//         <button className="navButton">
//           <Link to="/login">Login</Link>
//         </button>
//       </div>
//     </div>
//   );
// };





// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar-container">
//       <div className="logo">
//         <img src="/marketmind logo.png" />
//         MarketMind$
//       </div>
//       <nav className="item">
//         <ul className="ul">
//           <li>
//             <Link to="/">Markets</Link>
//           </li>
//           <li>
//             <Link to="/create-blog">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/watchlist">Watchlist</Link>
//           </li>
//           <li>
//             <Link to="/signin">Sign In</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

