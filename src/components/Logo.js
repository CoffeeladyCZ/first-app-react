import React from 'react';
import './Logo.css';

const Logo = ({src, alt}) => {
  const logoClassName = (alt === 'coffee-logo' ? "leftnav" : "none"); // ternarni operator

  return (
    <div>
      <h1>Coffeeshot</h1>
      <img src={src} className={logoClassName} alt={alt} />
    </div>
  )
};

export default Logo;


// refaktorovat funkci, img dát zvlášť