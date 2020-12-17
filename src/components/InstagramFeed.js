import React from 'react';
import Feed from 'react-instagram-authless-feed';

import './InstagramFeed.css';
// import instaImage from '../img/instagram.svg';
import Button from './Button';

const buttonInstagram = {
  title: 'Sledujte nás',
  type: 'white'
}

class InstagramFeed extends React.Component {
  render () {
    return (
      <div>
        <div className='instagramTop'>
          <h3>Sledujte nás i na instagramu</h3>
          <Button button={buttonInstagram} />
        </div>
        <div className="instagramFeed">
          <Feed userName="coffeeladycz" limit="12" />
        </div>
      </div>

    )
  }
}

export default InstagramFeed;
