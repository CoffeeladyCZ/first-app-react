import React from 'react';

import Dropdown from './Dropdown';
import DropdownSecond from './DropdownSecond';

import './TopMenu.css';

class TopMenu extends React.Component {
  render () {
    return (
      <nav className="topMenu">
        <ul>
          <li><Dropdown title="Kávovary" /></li>
          <li><DropdownSecond title="Káva" /></li>
          <li><div><a href="prislusenstvi">Příslušenství</a></div></li>
          <li><div><a href="onas">O nás</a></div></li>
          <li><div><a href="contact">Kontakt</a></div></li>
        </ul>
      </nav>
    );
  }
}

export default TopMenu;
