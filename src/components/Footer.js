import React from 'react';

import './Footer.css';

import CustomerInfo from './CustomerInfo';

// import { footerBox } from '../data/dummyData';

const footerContent = {
  name: 'Coffeeshot',
  email: 'coffeeshot@coffeeshot.cz',
  phone: '+420 732 111 222'
}

class Footer extends React.Component {
  render() {
    return (
      <>
        <h3 className="footerNameOfShop">Coffeeshot</h3>
        <div className="footer">
          <CustomerInfo />
          <CustomerInfo />
          <div id="contact" className="footerContent">
            <p className="name">{footerContent.name}</p>
            <p><a href="mailto: {footerContent}">{footerContent.email}</a></p>
            <p><a href="tel: {footerContent.phone}">{footerContent.phone}</a></p>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;
