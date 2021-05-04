import React from 'react';

import './Label.css';

const Label = ({name, className}) => {
  return(
    <div className={className}>
      <p>{name}</p> 
    </div> 
  )

}

export default Label;
