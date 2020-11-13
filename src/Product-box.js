import React from 'react';
import './Product-box.css';

class ProductBox extends React.Component {
    render() {
        const {title} = this.props.div; 
    return <div className="product-box"><p>{title}</p></div>
        
    }
}

export default ProductBox; 