import React from 'react';

const Category = props => {



  
  return(
    <div className="LocalEventBox">
      <p>Category: {props.field} Total: {props.value}</p>
    </div>
  );
};



export default Category;