import React from 'react';
import { connect } from 'react-redux';

function Campus(props) {
  const campus = props.campus;
  return (
    <h4>
      {campus.name}
    </h4>
  )
}

export default Campus;
