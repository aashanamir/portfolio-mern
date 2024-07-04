import React from 'react';
import './Navbar.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-logo">
        <Link to="/admin">Admin Panel</Link>
      </div>
      <ul className="admin-navbar-links">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/projects">Projects</Link>
        </li>
        <li>
          <Link to="/admin/upload-profile">Upload Profile</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
      </ul>
      <div className="admin-navbar-profile">
        <Link to="/admin/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
