import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Auxetic Metamaterials
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Bilgi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hesaplama" className="nav-links">
              Hesaplama
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
