import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

// const CampusItem = (props) => {
//   return (
//     <div>
//       {props.campus.name}
//     </div>
//   )
// }



const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(Campus);
