import React, {useState} from 'react';

import './Dropdown.css';

const Dropdown = ({title}) => {
  const [isOpen, setOpen] = React.useState(false); 
  console.log(isOpen, 'open');
  return (
    <div className="container" 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
    >
      {title}
      {isOpen && <div className="isOpen">
        <div className="item" onClick={() => alert("klikl si")}>Kolumbie</div>
        <div className="item" onClick={() => alert("klikl si")}>Kenya</div>
      </div>}
    </div>
  )
}

export default Dropdown;