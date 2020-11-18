import React from 'react';
import './Product-box.css';

import Button from './Button';

const greyButton = {
    title: "Koupit",
    type: "grey"
};


class ProductBox extends React.Component {
    render() {
        const {title} = this.props.div; 
        const {price} = this.props.div;
        const {description} = this.props.div;
        const {src} = this.props.div;
        const {alt} = this.props.div;
        return (
            <div className="product-box">
                <img className="imageProduct" src={src} alt={alt} />
                <p>{title}</p>
                <p className="description">{description}</p>
                <p className="price">{price}</p>
                <Button button={greyButton} />
            </div>
        );
        
    }
}

export default ProductBox; 