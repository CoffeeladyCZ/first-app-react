import React from 'react';

import Dropdown from './Dropdown';
import DropdownDva from './DropdownDva';

import './TopMenu.css';

class TopMenu extends React.Component {
  render () {
    return (
      <nav className="topMenu">
        <ul>
          <li><Dropdown title="Kávovary" /></li>
          <li><DropdownDva title="Káva" /></li>
          <li><a href="prislusenstvi">Příslušenství</a></li>
          <li><a href="onas">O nás</a></li>
          <li><a href="contact">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
}

export default TopMenu;
