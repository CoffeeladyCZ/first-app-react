import React from 'react';
import './TopMenu.css';
import Dropdown from './Dropdown';
import DropdownDva from './DropdownDva';

import { dropdown } from '../data/dummyData';

class TopMenu extends React.Component {
  render () {
    return (
      <nav className="topMenu">
        <ul>
          <li><Dropdown title="Kávovary" /></li>
          <li><DropdownDva title="Káva" /></li>
          <li><a href="#">Příslušenství</a></li>
          <li><a href="#">O nás</a></li>
          <li><a href="contact">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
}

export default TopMenu;
