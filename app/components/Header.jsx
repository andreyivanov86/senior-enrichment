import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

  return (
    <nav>
      <NavLink to={'./Campuses'}>
        <button>Campus</button>
      </NavLink>
      <NavLink to={'./Students'}>
        <button>Students</button>
      </NavLink>
    </nav>
  )
}

export default Navbar;

// const mapStateToProps = function (state) {
//   return {
//     currentMain: state.currentMain
//   }
// }

// export default connect(mapStateToProps)(Navbar)
