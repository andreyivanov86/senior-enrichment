import React from 'react';
import { connect } from 'react-redux';


function Campus (props) {
  const campus = props.campus;
  return (
    <li>
      <div>
        <h4>
          {campus.name}
        </h4>
      </div>
    </li>
  )
}

export default Campus;
