import React from 'react';
import './ProductBox.css';

import Button from './Button';

const greyButton = {
    title: "Koupit",
    type: "grey"
};

class ProductBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  addProduct = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }

  removeProduct = () => {
    if (this.state.count <= 0) {
      this.setState({
          count:0
      });
    } else {
      this.setState({
          count: this.state.count - 1
      });
    }
	};

// Button component will only add product and we are passinf addProduct function inside the component

  render() {
    const {title, price, description} = this.props.content;
    const {src, alt} = this.props.image;

    const {count} = this.state;

    return (
      <div className="product-box">
        <img className="imageProduct" src={src} alt={alt} />

        <p>{title}</p>
        <p className="description">{description}</p>
        <p className="price">{price}</p>

        <button onClick={this.removeProduct}> - </button>
        <span>{this.state.count}</span>
        <button onClick={this.addProduct}> + </button>
        <Button button={greyButton} onClick={this.addProduct}/>
      </div>
    );
  }
}

export default ProductBox;
