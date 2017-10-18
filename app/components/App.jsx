import React from 'react';
import { connect } from 'react-redux';
import CampusItem from './Campus';
import StudentItem from './Student';
import store from '../store';

console.log(store)

const App = (props) => {
  return (

    <div>
      { props.campuses && props.campuses.map(campus =>
          <CampusItem key={campus.id} campus={campus} />
      )}
    </div>
    // <div>
    //   {
    //     props.students && props.students.map(student =>
    //       (
    //         <StudentItem key={student.id} student={student} />
    //       )
    //     )
    //   }
    // </div>
  )
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

export default connect(mapStateToProps)(App);
