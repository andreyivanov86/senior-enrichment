import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses';
import Campus from './Campus';

class Campuses extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    const { campuses } = this.props;
    return (
      <div>
          {
            campuses && campuses.map(campus =>
              <Campus campus={campus} key={campus.id} />
            )
          }
      </div>
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
    getCampuses() {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
