import React from 'react';

import './InstagramFeed.css';
import instaImage from '../img/instagram.svg';
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
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
          <img src={instaImage} />
        </div>
      </div>
      
    )
  }
}

export default InstagramFeed;