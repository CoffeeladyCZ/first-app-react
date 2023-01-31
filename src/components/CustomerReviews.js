import React from 'react';

import './CustomerReviews.css';
class CustomerReviews extends React.Component {
  render() {
    const {text, author} = this.props;
    return(
      <div className="review">
        <p className="quote">„</p>
        <q className="review-text">{text}</q>
        <p className="review-author">{author}</p>
        <div className="p-rating">
          <button className="p-rating-star">★</button>
          <button className="p-rating-star">★</button>
          <button className="p-rating-star">★</button>
          <button className="p-rating-star">★</button>
        </div>
      </div>

    )
  }
}

export default CustomerReviews;
