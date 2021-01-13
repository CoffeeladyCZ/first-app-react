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
        <div class="p-rating">
          <button class="p-rating-star">★</button>
          <button class="p-rating-star">★</button>
          <button class="p-rating-star">★</button>
          <button class="p-rating-star">★</button>
        </div>
      </div>

    )
  }
}

export default CustomerReviews;
