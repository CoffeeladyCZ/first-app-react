import React from 'react';
import './Logo.css';

const Logo = ({src, alt, count}) => {
  const logoClassName = (alt === 'coffee-logo' ? "leftnav" : "rightnav"); // ternarni operator

  return (
    <div>
    <span>{count}</span>
    <img src={src} className={logoClassName} alt={alt} />
    </div>
  )
};

export default Logo;
