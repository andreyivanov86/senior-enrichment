import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { postStudent } from '../reducers/students';

class AddStudent extends Component {

  componentDidMount() {
    this.props.getCampuses();
    // this.props.postStudent();
  }

  render() {
    const campuses = this.props.campuses;

    return (
      <div>
        <div> Add Student </div>
        <form>
          <input
            placeholder="Enter Name"
          />
        </form>
        <label>Select Campus</label>
        <select>
          {
            campuses && campuses.map(campus => <option key={campus.id}>{campus.name}</option>)
          }
          {/* <option>1</option> */}
        </select>
        <button>Submit</button>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
