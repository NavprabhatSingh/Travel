// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">TripExpense</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
