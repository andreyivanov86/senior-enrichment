import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { postCampus } from '../reducers/campuses';

class AddCampus extends Component {
  render() {
    return (
      <div>
        <div>
          Add Campus
      </div>
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
            <button style={{ margin: '5px' }} type="submit">Submit</button>
          </form>
        </div>
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
      dispatch(postCampus({
        name: event.target.campusName.value,
        url: event.target.campusImage.value
      }));
      event.target.campusName.value = null;
      event.target.campusImage.value = null;

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
