import React from 'react';

import './Banner.css';

class Banner extends React.Component {
  render() {
    const {text} = this.props.content;
    const {className} = this.props.className;

    return (
      <div className={className}>
        <p>{text}</p>
      </div>  
    )
  }
}

export default Banner;