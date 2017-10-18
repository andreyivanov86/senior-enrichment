import React from 'react';
import CampusItem from './Campus';

const App = (props) => {
  //console.log(props)
  return (
    <div>
      {
        props.campuses && props.campuses.map(campus =>
          (<div>
            <CampusItem key={campus.id} campus={campus} />
          </div>)
        )
      }
    </div>
  )
};

export default App;
