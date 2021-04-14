import React from 'react';
import './Logo.css';

const Logo = ({src, alt}) => {
  const logoClassName = (alt === 'coffee-logo' ? "leftnav" : "none"); 

  return (
    <div>
      <h1>Coffeeshot</h1>
      <img src={src} className={logoClassName} alt={alt} />
    </div>
  )
};

export default Logo;
