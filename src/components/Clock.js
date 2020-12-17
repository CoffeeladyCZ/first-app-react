import React from 'react';

class Clock extends React.Component {
  render() {
    const {date} = this.props;

    return (
      <div>
      {date && (<p>Právě je {date.toLocaleTimeString()}</p>)} 
      </div>
    )
  }
}

export default Clock
