import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
      <ul className="nav nav-tabs mt-3">
          <li className="nav-item">
              <NavLink activeClassName="active selected" className="nav-link" exact to="/">Welcome</NavLink>
          </li>
          <li className="nav-item">
              <NavLink activeClassName="active selected" className="nav-link" to="/our-macarons">Our Macarons</NavLink>
          </li>
          <li className="nav-item">
              <NavLink activeClassName="active selected" className="nav-link" to="/gifts-and-parties">Gifts &amp; Parties</NavLink>
          </li>
          <li className="nav-item">
              <NavLink activeClassName="active selected" className="nav-link" to="/contact">Contact</NavLink>
          </li>
      </ul>
    );
};

export default Nav;