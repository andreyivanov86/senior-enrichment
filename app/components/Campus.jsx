import React from 'react';

const CampusItem = (props) => {
  console.log(props)
  return (
    <div>
      {props.campus.name}
    </div>
  )
}

export default CampusItem;
