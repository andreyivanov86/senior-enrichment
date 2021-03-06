import axios from 'axios';

const initialState = [];
// Action Types
export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_STUDENTS = 'DELETE_STUDENTS';
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
  const action = { type: EDIT_STUDENT, studentId };
  return action;
}

export function removeStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

export function removeStudents(students) {
  const action = { type: DELETE_STUDENTS, students };
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
  return function thunk(dispatch) {
    axios.put('/api/student/' + studentId, newStudent)
      .then(res => {
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

    case DELETE_STUDENTS:
      return action.students

    case EDIT_STUDENT:
      return state.map(student => {
        return action.studentId.id === student.id ? action.studentId : student
      })

    default: return state
  }
}
