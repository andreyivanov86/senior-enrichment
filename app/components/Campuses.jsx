import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses';
import CampusStudent from './CampusStudent';

class Campuses extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    const { campuses } = this.props;
    return (
      <div>
        {
          campuses && campuses.map(campus => {
            return (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                <span>{campus.name}</span>
                </Link>
              </div>
            )
          })
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
