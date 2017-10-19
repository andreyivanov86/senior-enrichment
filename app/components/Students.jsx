import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/students'
import Student from './Student';

class Students extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <ul>
          {
            students && students.map(student =>
              <Student student={student} key={student.id} />)
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
