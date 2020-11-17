import React from 'react';
import './TopMenu.css';

class TopMenu extends React.Component {
    render () {
        return (
            <nav className="topMenu">
                <ul>
                    <li><a href="#">Kávovary</a></li>
                    <li><a href="#">Káva</a></li>
                    <li><a href="#">Příslušenství</a></li>
                    <li><a href="#">O nás</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
        );
    }    
}

export default TopMenu;
