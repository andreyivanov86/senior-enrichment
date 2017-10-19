import React from 'react';
import { connect } from 'react-redux';

function Navbar (props) {

  return (
    <nav>
      <button>Campus</button>
      <button>Students</button>
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
