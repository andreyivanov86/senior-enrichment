import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { postStudent } from '../reducers/students';

class AddCampus extends Component {
  render() {
    return (
      <div>
        Add Campus
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses() {
      dispatch(fetchCampuses())
    },
    handleSubmit(event) {
      event.preventDefault();
      dispatch(postStudent({
        name: event.target.studentName.value,
        campusId: event.target.campusName.value
      }));
      event.target.studentName.value = null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
