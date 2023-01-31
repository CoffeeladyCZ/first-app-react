import React from 'react';

// * použití Hooks *
// import React, {useState} from 'react';

import './Dropdown.css';

import { dropdown } from '../data/dummyData';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {title} = this.props;

    return (
      <div className="container"
        onMouseEnter={() => this.setState( {isOpen: true} )}
        onMouseLeave={() => this.setState( {isOpen: false} )}
      >
      {title}
      {this.state.isOpen &&
        <div className="isOpen">
          <div className="item">{dropdown.kavovary.brandFirst}</div>
          <div className="item">{dropdown.kavovary.brandSecond}</div>
          <div className="item">{dropdown.kavovary.brandThird}</div>
        </div>}
        <i className="fas fa-chevron-down"></i>
      </div>
    )
  }
}

export default Dropdown;
