import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../reducers/students'

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
        {
          students && students.map(student => {
            return (
              <div>
                <div key={student.id}>{student.name}</div>

                <button value={student.id} onClick={this.props.handleClick}>Delete</button>

                <NavLink to={`/student/${student.id}`}>
                  <button>Edit</button>
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
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
