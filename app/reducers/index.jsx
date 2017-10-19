import { combineReducers } from 'redux';
import campusesReducer from './campuses';
import studentReducer from './students'

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentReducer
})

export default rootReducer;
