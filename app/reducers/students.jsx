import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENT = 'GET_STUDENT';

// Action Creator
export function getStudents (students) {
  const action = { type: GET_STUDENT, students}
  return action;
}
// Thunk Creator
export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/student')
    .then(result => result.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action)
    })
  }
}
// Reducer
export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENT:
      console.log(action)
      return action.student
    default: return state
  }
}
