import React from 'react';
import './ShoppingCard.css';

const ShoppingCard = ({src, alt, count}) => {
  const cardClassName = (alt === 'shoppingCard' ? 'rightnav' : 'none');

  return (
    <div className="shoppingBox">
      <div className="circle">
        <span className="count">{count}</span>
      </div>
      
      <img src={src} className={cardClassName} alt={alt} />
    </div>
  )
};

export default ShoppingCard;
