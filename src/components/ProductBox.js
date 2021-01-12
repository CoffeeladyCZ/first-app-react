import React from 'react';
import './ProductBox.css';

import Button from './Button';

const orangeButton = {
    title: "Koupit",
    type: "orange"
};

class ProductBox extends React.Component {
  render() {
    const {title, price, description} = this.props.content;
    const {src, alt} = this.props.image;
    const { handleAddProduct, handleRemoveProduct, count } = this.props;

    return (
      <div className="product-box">
        <img className="imageProduct" src={src} alt={alt} />

        <p className="nameOfProduct">{title}</p>
        <p className="description">{description}</p>
        <p className="price">{price}</p>

        <button className="buttonBorder minus" onClick={handleRemoveProduct}> - </button>
        <span>{count}</span>
        <button className="buttonBorder" onClick={handleAddProduct}> + </button>
        <Button className="orange" button={orangeButton} onClick={handleAddProduct}/>
      </div>
    );
  }
}

export default ProductBox;
