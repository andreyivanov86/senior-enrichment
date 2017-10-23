import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses';


class Campuses extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    const { campuses } = this.props;
    return (
      <div>
        <NavLink to={'/add-campus'}>
          <button>Add Campus</button>
        </NavLink>
        <div>
          {
            campuses && campuses.map(campus => {
              return (
                <div style={{ margin: '5px' }} key={campus.id}>
                  <NavLink to={`/campuses/${campus.id}`}>
                    <span>{campus.name}</span>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
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
