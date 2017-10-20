import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { postStudent } from '../reducers/students';

class AddStudent extends Component {

  componentDidMount() {
    this.props.getCampuses();
    //this.props.postStudent();
  }

  render() {
    console.log(this.props)
    const campuses = this.props.campuses;
    return (
      <div>
        <div> Add Student </div>
        <div>
          <label>Select Campus</label>
          <select name="campusName">
            {
              //add campuses to option list
              campuses && campuses.map(campus => <option key={campus.id}>{campus.name}</option>)
            }
          </select>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            placeholder="Enter Name"
            type="text"
            name="studentName"
          />
          <button type="submit">Submit</button>
        </form>
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
      // console.log(event.target.cmapusName.value)
      dispatch(postStudent({
        name: event.target.studentName.value,
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
