import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/students'
import Student from './Student';


class Students extends Component {

  ComponentDidMount() {
    this.props.getStudents();
  }


  render() {
    const { students } = this.props;
    console.log(students)
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
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
