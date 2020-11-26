import React from 'react';
import './TopMenu.css';
import './Footer';

class TopMenu extends React.Component {
  render () {
    return (
      <nav className="topMenu">
        <ul>
          <li><a href="#">Kávovary</a></li>
          <li><a href="#">Káva</a></li>
          <li><a href="#">Příslušenství</a></li>
          <li><a href="#">O nás</a></li>
          <li><a href="contact">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
}

export default TopMenu;
