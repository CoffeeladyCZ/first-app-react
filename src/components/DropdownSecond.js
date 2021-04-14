import React from 'react';
import './Dropdown.css';

import {dropdown} from '../data/dummyData';

class DropdownSecond extends React.Component {
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
        onMouseEnter={() => this.setState( {isOpen: true})}
        onMouseLeave={() => this.setState( {isOpen: false})}
      >
        {title}

        {this.state.isOpen && <div className="isOpen">
          <div className="item">{dropdown.coffee.brandFirst}</div>
          <div className="item">{dropdown.coffee.brandSecond}</div>
          <div className="item">{dropdown.coffee.brandThird}</div>
        </div>}
        <i class="fas fa-chevron-down"></i>

      </div>
    )
  }
}

export default DropdownSecond;
