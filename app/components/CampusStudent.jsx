import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchStudents } from '../reducers/students';
import { fetchCampuses, updateCampus } from '../reducers/campuses';


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

    let studentsForCampus = [];
    studentsForCampus = studentsArr.filter(student => student.campusId === campusId);
    // console.log(selectedCampus)

    return (
      <div>
        <div>
          {
            selectedCampus && (<h4>{selectedCampus.name}</h4>)
          }
        </div>
        <h4>Edit Campus</h4>
        <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Campus Name</label>
            <input
              style={{ margin: '5px' }}
              placeholder="Enter Name"
              type="text"
              name="campusName"
            />
          </div>
          <div>
            <label>Logo</label>
            <input
              style={{ margin: '5px' }}
              placeholder="Enter URL"
              type="text"
              name="campusImage"
            />
          </div>
          <button style={{ margin: '5px' }} type="submit" name="button" value={campusId}>Submit</button>
        </form>
      </div>

        <button style={{ margin: '5px' }}>Delete Campus</button>
        <div>
          <h4>Students: </h4>
          {
            studentsForCampus.map(student => {
              return (
                <div style={{ display: 'flex' }}>
                  <div key={student.id}>{student.name}</div>
                  <NavLink to={`/student/${student.id}`}>
                    <button style={{ margin: '5px' }}>View</button>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
        <div>
          <NavLink to={'/add-student'}>
            <button>Add Student</button>
          </NavLink>
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
    },
    handleSubmit(event) {
      event.preventDefault();
      let campusId = Number(event.target.button.value);
      dispatch(updateCampus(campusId, {
        name: event.target.campusName.value,
        url: event.target.campusImage.value
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusStudent);
