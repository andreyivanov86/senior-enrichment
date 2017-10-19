import React from 'react';
import { connect } from 'react-redux';

function Student (props) {

  const student = props.student;
  return (
    <li>
      <div>
        {student.name}
      </div>
    </li>
  )

}

export default Student;
