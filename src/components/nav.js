import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
      <ul className="nav nav-tabs mt-3">
          <li className="nav-item">
              <Link className="nav-link" to="/">Welcome</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/our-macarons">Our Macarons</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/gifts-and-parties">Gifts &amp; Parties</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
    );
};

export default Nav;