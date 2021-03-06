import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

  return (
    <nav>
      <NavLink to={'/campuses'}>
        <button>Campuses</button>
      </NavLink>
      <NavLink to={'/students'}>
        <button>Students</button>
      </NavLink>
    </nav>
  )
}

export default Navbar;

