import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';

class EditStudent extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <div>Edit student</div>
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
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
