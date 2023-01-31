import React from 'react';
import './ProductBox.css';
import './Label.css';

import Button from './Button';
import Label from './Label';
import { labels } from '../data/dummyData';

const orangeButton = {
    title: "Koupit",
    type: "orange"
};

class ProductBox extends React.Component {
  render() {
    const {title, price, description} = this.props.content;
    const {src, alt} = this.props.image;
    const { handleAddProduct, handleRemoveProduct, count } = this.props;

    let showGiftFree = price > 500;

    return (
      <div className="productBox">
          {
            showGiftFree && <Label name={labels.giftFree.title} className={labels.giftFree.className} />
          }
        <img className="imageProduct" src={src} alt={alt} />
        <p className="nameOfProduct">{title}</p>
        <p className="description">{description}</p>
        <p className="price">{price} Kč</p>

        <button className="buttonBorder minus" onClick={handleRemoveProduct}> - </button>
        <span>{count}</span>
        <button className="buttonBorder" onClick={handleAddProduct}> + </button>
        <Button className="orange" button={orangeButton} onClick={handleAddProduct}/>
      </div>
    );
  }
}

export default ProductBox;
