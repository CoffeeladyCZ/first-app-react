import React from 'react';

import './Banner.css';

class Banner extends React.Component {
  render() {
    const {className} = this.props.className;

    return (
      <div className={className}>
      </div>  
    )
  }
}

export default Banner;