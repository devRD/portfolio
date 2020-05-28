import React from 'react';
import {
  NavLink
} from 'react-router-dom'; 

const navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">devRD</NavLink>
      <button 
        className="navbar-toggler"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link">blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">about me</NavLink>
          </li>
          <li className="nav-item">
            <i className=""></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
