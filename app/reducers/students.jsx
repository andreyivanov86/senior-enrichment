import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENTS = 'GET_STUDENTS';

// Action Creator
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students }
  return action;
}
// Thunk Creator
export function fetchStudents() {

  return function thunk(dispatch) {
    return axios.get('/api/student')
      .then(result => result.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
      })
      .catch(err => console.log(err))
  }
}
// Reducer
export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    default: return state
  }
}
