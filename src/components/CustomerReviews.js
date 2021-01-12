import React from 'react';

import './CustomerReviews.css';
class CustomerReviews extends React.Component {
  render() {
    const {text, author} = this.props;
    const {src, alt} = this.props
    return(
      <div className="review">
        <q className="review-text">{text}</q>
        <p className="review-author">{author}</p>
        <img className="star" src={src} alt={alt} />
      </div>

    )
  }
}

export default CustomerReviews;
