import React from 'react';
import './Logo.css';

const Logo = ({src, alt}) => {
  const logoClassName = (alt === 'coffee-logo' ? "leftnav" : "rightnav"); // ternarni operator

  return (
    <img src={src} className={logoClassName} alt={alt} />
  )
};

export default Logo;
