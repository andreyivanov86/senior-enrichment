import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENTS = 'GET_STUDENTS';
//export const GET_STUDENTS_FOR_CAMPUS = 'GET_STUDENTS_FOR_CAMPUS';

// Action Creator
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students }
  return action;
}
// export function getStudentsForCampus(students) {
//   const action = { type: GET_STUDENTS_FOR_CAMPUS, students}
//   return action
// }

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
