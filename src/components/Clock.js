import React from 'react';

class Clock extends React.Component {
  render() {
    // const {date} = this.props;   
    return (
      <p>Právě je {this.state.date.toLocalTimeString()}</p> // TypeError: Cannot read property 'date' of null
    )
  }
}

export default Clock
