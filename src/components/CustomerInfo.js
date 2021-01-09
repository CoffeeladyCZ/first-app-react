import React from 'react';

// import { footerBox } from '../data/dummyData';

import './CustomerInfo.css';

const footerBox = {
  customerService: {
    claim: 'Zákaznický servis',
    first: 'Doprava a platba',
    second: 'Obchodní podmínky',
    third: 'Jak reklamovat zboží'
  },
  aboutUs: {
    first: 'Náš příběh',
    second: 'Jak vybrat kávu',
    third: 'Baristické kurzy'
  }
}

class CustomerInfo extends React.Component {
  render() {
    return(
      <div className='text'>
        <h4>{footerBox.customerService.claim}</h4>
        <p>{footerBox.customerService.first}</p>
        <p>{footerBox.customerService.second}</p>
        <p>{footerBox.customerService.third}</p>
      </div>
    )
  }
}

export default CustomerInfo;
