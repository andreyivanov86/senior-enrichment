import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students'


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
        <h4>Edit Student</h4>
        <h4>{studentToEdit && (<h4>{studentToEdit.name}</h4>)}</h4>
        <form>
          <label>Selecet Campus</label>
          <select name="campusName" >
          {
            //add campuses to option list
            campuses && campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
          }
        </select>
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
      dispatch(postStudent({
        name: event.target.studentName.value,
        campusId: event.target.campusName.value
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
