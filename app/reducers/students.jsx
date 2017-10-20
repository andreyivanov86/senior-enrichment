import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
// Action Creator
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students }
  return action;
}
export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action
}
export function removeStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action
}
// Thunk Creator
export function fetchStudents() {

  return function thunk(dispatch) {
    axios.get('/api/student')
      .then(result => result.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
      })
      .catch(err => console.log(err))
  }
}

export function postStudent(student) {

  return function thunk(dispatch) {
    axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(addStudent(newStudent));
      })
      .catch(err => console.log(err))
  }
}

export function deleteStudent(studentId) {

  return function thunk(dispatch) {
    dispatch(removeStudent(studentId));
    axios.delete('/api/student/' + studentId)
      .catch(err => console.log(err))

  }
}
// Reducer
export default function studentReducer(state = initialState, action) {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students

    case ADD_STUDENT:
      return state.concat([action.student])

    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);

    default: return state
  }
}
