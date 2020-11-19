import React from 'react';

import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    console.log("This button was clicked.") // This will write log into Dev console after click, used for debugging purpose

    this.props.onClick() //here we call function we have passed from ProductBox.js
  };

  render() {
    const { type, title } = this.props.button; // This is helping us to write less code in case we would have a log file with many props usage.

    return <button onClick={this.handleClick} className={`button ${type}`}>{title}</button>
  }
}

export default Button;
