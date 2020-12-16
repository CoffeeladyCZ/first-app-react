import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <p>Právě je {this.props.date && this.props.date.toLocaleTimeString()}</p>
    )
  }
}

export default Clock
