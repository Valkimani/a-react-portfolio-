import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"
      className="navbar-brand">Valentine Kimani
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/"
            className="nav-link">ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">PORTFOLIO
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact"
            className="nav-link">CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;