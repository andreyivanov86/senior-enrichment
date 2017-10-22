import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { postStudent } from '../reducers/students';

class AddStudent extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h4> Add Student </h4>
        <form onSubmit={this.props.handleSubmit}>
          <label>Campus</label>
          <select name="campusName" style={{ margin: '5px' }}>
            {
              //add campuses to option list
              campuses && campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
            }
          </select>
          <input
            style={{ margin: '5px' }}
            placeholder="Enter Name"
            type="text"
            name="studentName"
          />
          <button style={{margin: '5px'}} type="submit">Submit</button>
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
      dispatch(postStudent({
        name: event.target.studentName.value,
        campusId: event.target.campusName.value
      }));
      event.target.studentName.value = null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
