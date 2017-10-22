import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses';

import { fetchStudents, deleteStudent } from '../reducers/students'

class Students extends Component {

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }


  render() {
    const students = this.props.students;
    const campuses = this.props.campuses;

    return (
      <div>
        <NavLink to={'/add-student'}>
          <button>Add Student</button>
        </NavLink>
        {
          students && students.map(student => {
            return (
              <div key={student.id} style={{display: 'flex'}}>

                <div style={{margin: '5px'}}>{student.name}</div>

                <div style={{margin: '5px'}}>
                  {campuses && campuses.find(campus => campus.id === student.campusId).name}
                </div>

                <button style={{margin: '5px'}} value={student.id} onClick={this.props.handleClick}>Delete</button>

                <NavLink to={`/student/${student.id}`}>
                  <button style={{margin: '5px'}}>Edit</button>
                </NavLink>

              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    },
    getStudents() {
      dispatch(fetchStudents())
    },
    handleClick(event) {
      event.preventDefault();
      const studentId = Number(event.target.value);
      dispatch(deleteStudent(studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
