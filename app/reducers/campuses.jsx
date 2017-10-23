import axios from 'axios';

const initialState = [];
//Action Types
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const ADD_CAMPUS = 'ADD_CAMPUS';
// Action Creator
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses }
  return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
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

export function postCampus(campus) {
  return function thunk(dispatch) {
    axios.post('/api/campus', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(addCampus(newCampus));
      })
      .catch(err => console.log(err))
  }
}
// Reducer
export default function campusReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses

    case ADD_CAMPUS:
      return state.concat([action.campus])

    default: return state
  }
}

