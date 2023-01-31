import React from 'react';

import Dropdown from './Dropdown';
import DropdownSecond from './DropdownSecond';

import './Navigation.css';

// přidat funkci toggle - zbarvení aktivního stavu v menu
class Navigation extends React.Component {
  render () {
    return (
      <nav className="topNavigation">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="navigationMenu">
          <li>
            <Dropdown title="Kávovary" />
          </li>
          <li>
            <DropdownSecond title="Káva" />
          </li>
          <li>
            <div>
              <a href="prislusenstvi">Příslušenství</a>
            </div>
          </li>
          <li>
            <div>
              <a href="onas">O nás</a>
            </div>
          </li>
          <li>
            <div>
              <a href="contact">Kontakt</a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
