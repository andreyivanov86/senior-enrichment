import axios from 'axios';

const initialState = [];
//Action Types
export const GET_CAMPUSES = 'GET_CAMPUSES';

// Action Creator
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses }
  return action;
}
// Thunk Creator
export function fetchCampuses() {

  return function thunk(dispatch) {
    return axios.get('/api/campus')
      .then(result => result.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action)
      })
      .catch(err => console.log(err))
  }
}
// Reducer
export default function campusReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    default: return state
  }
}

