import { combineReducers } from 'redux';
import campusesReducer from './campuses';
import studentReducer from './students'

// Bring together campuses and student state
const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentReducer
})

export default rootReducer;
