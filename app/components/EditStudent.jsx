import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents, updateStudent } from '../reducers/students'


class EditStudent extends Component {

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {

    const studentId = Number(this.props.match.params.id);
    const studentsArr = this.props.students;
    const campuses = this.props.campuses;
    let studentToEdit = studentsArr.find(student => student.id === studentId);
    return (
      <div>
        <h4>{studentToEdit && (<h4>{studentToEdit.name}</h4>)}</h4>
        <div>Edit Student</div>
        <form onSubmit={this.props.handleSubmit} name="form" value={studentId}>
          <label>Campus</label>
          <select name="campusName" >
            {
              //add campuses to option list
              campuses && campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
            }
          </select>
          <input
            placeholder="Enter Name"
            type="text"
            name="studentName"
          />
          <button type="Submit" name="button" value={studentId}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    },
    getStudents() {
      dispatch(fetchStudents());
    },
    handleSubmit(event) {
      event.preventDefault();
      console.log('i am in handle')
      let studentId = Number(event.target.button.value);
      dispatch(updateStudent(studentId, {
        name: event.target.studentName.value,
        campusId: event.target.campusName.value
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
