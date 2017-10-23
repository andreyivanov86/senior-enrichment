import axios from 'axios';

const initialState = [];
//Action Types
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const EDIT_CAMPUS = 'EDIT_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
// Action Creator
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses }
  return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function removeCampus(campus) {
  const action = { type: DELETE_CAMPUS, campus };
  return action;
}

export function editCampus(campusId) {
  const action = { type: EDIT_CAMPUS, campusId };
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

export function updateCampus(campusId, newCampus) {
  return function thunk(dispatch) {
    axios.put('/api/campus/' + campusId, newCampus)
    .then(res => {
        dispatch(editCampus(res.data));
      })
      .catch(err => console.log(err))
  }
}

export function deleteCampus(campusId) {
  return function thunk(dispatch) {
    dispatch(removeCampus(campusId));
    axios.delete('/api/student/' + campusId)
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

    case EDIT_CAMPUS:
      return state.map(campus => {
        return action.campusId.id === campus.id ? action.campusId : campus
      })

    default: return state
  }
}

