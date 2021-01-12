import React from 'react';

import './CustomerInfo.css';

class CustomerInfo extends React.Component {
  render() {
    const {claim, first, second, third} = this.props;
    return(
      <div className='text'>
        <h4>{claim}</h4>
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
      </div>
    )
  }
}

export default CustomerInfo;
