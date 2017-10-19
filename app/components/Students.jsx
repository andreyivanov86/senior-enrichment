import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchStudents } from '../reducers/students'


class Students extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <NavLink to={'/add-student'}>
          <button>Add Student</button>
        </NavLink>
        <ul>
          {
            students && students.map(student =>
              <div key={student.id}>{student.name}</div>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents() {
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
