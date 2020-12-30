// import React, {useState} from 'react';
import React from 'react';

import './Dropdown.css';

import { dropdown } from '../data/dummyData';

// * použití Hooks *

// const Dropdown = ({title}) => {
//   const [isOpen, setOpen] = React.useState(false);  
//   console.log(isOpen, 'open');
//   return (
//     <div className="container" 
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//     >
//       {title}
//       {isOpen && <div className="isOpen">
//         <div className="item" onClick={() => alert("klikl si")}>Kolumbie</div>
//         <div className="item" onClick={() => alert("klikl si")}>Kenya</div>
//       </div>}
//     </div>
//   )
// }
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {title} = this.props;
    const {kavovary} = this.props;
    console.log(this.state.isOpen);
    return (
      <div className="container"
          onMouseEnter={() => this.setState( {isOpen: true} )}
          onMouseLeave={() => this.setState( {isOpen: false} )}
      >
          {title}
          {this.state.isOpen && <div className="isOpen">
              <div className="item">{dropdown.kavovary.brandFirst}</div>
              <div className="item">{dropdown.kavovary.brandSecond}</div>
              <div className="item">{dropdown.kavovary.brandThird}</div>
            </div>}
      </div>
    )
  }
}

export default Dropdown;
