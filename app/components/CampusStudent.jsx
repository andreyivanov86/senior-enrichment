import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';


class CampusStudent extends Component {

  componentDidMount() {
    this.props.getStudents();
    this.props.getCampuses();
  }

  render() {
    const campusesArr = this.props.campuses;
    const campusId = Number(this.props.match.params.id);
    const studentsArr = this.props.students;

    let selectedCampus;
    selectedCampus = campusesArr.find(campus => {
      return campus.id === campusId
    })

    // console.log('selected', selectedCampus.name)

    let studentsForCampus = [];
    studentsForCampus = studentsArr.filter(student => student.campusId === campusId);

    return (
      <div>
        {
          selectedCampus && (<h4>{selectedCampus.name}</h4>)
        }
        <div>
          {
            studentsForCampus.map(student => <div key={student.id}>{student.name}</div>)
          }
        </div>
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
    getStudents() {
      dispatch(fetchStudents());
    },
    getCampuses() {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusStudent);
