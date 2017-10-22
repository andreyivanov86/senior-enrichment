import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT'
// Action Creator
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students }
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function editStudent(studentId) {
  console.log('I am in action edit')
  const action = { type: EDIT_STUDENT, studentId};
  return action;
}

export function removeStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}
// Thunk Creator
export function fetchStudents() {
  return function thunk(dispatch) {
    axios.get('/api/student')
      .then(res => res.data)
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

export function updateStudent(studentId, newStudent) {
  console.log('I am in update thunk');
  // console.log(newStudent)
  return function thunk(dispatch) {
    return axios.put('/api/student/' + studentId, newStudent)
    .then(res => {
      console.log(res.data)
      dispatch(editStudent(res.data));
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

    case EDIT_STUDENT:
      return state.map(student => {
        console.log('I am in reducer')
        // console.log('action', action)
        // console.log('student', student)
        return action.student.id === student.id ? action.student : student
      })

    default: return state
  }
}
