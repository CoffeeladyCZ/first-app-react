import React from 'react';
import './Footer.css';

const footerContent = {
  name: 'Coffeeshot',
  email: 'coffeeshot@coffeeshot.cz',
  phone: '732 111 222 333'
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div id="contact" className="footerContent">
          <p className="name">{footerContent.name}</p>
          <p>{footerContent.email}</p>
          <p>{footerContent.phone}</p>
        </div>
      </div>
    )
  }
}

export default Footer;