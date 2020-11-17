import React from 'react';
import './Logo.css';

// první verze
// const Logo = ({alt, src}) => (
//     <img src={src} className="App-logo" alt={alt} />
// )

// druha verze
const Logo = ({src, alt}) => {
    const logoClassName = (alt === 'coffee-logo' ? "leftnav" : "rightnav"); // ternarni operator
    return (
      <img src={src} className={logoClassName} alt={alt} />
    )};

export default Logo;