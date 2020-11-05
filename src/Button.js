import React from 'react';

import './Button.css';

//We will remove these examples after next lesson

// 1st version
// class Button extends React.Component {
//  render() {
//    return <button>dgergerg</button>
//  }
// }

// export default Button;


// 2nd version
// class Button extends React.Component {
//  render() {
//    return <button className="button" style={{backgroundColor: this.props.button.color}}>{this.props.button.title}</button>
//  }
// }

// export default Button;


// 3rd version
// class Button extends React.Component {

//   handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   render() {
//     return <button className={`button ${this.props.button.type}`} onClick={this.handleClick}>{this.props.button.name}</button>;
//   }
// }

// export default Button;

class Button extends React.Component {
  handleClick() {
    console.log("This button was clicked.") // This will write log into Dev console after click
  };

  render() {
    const {type, title} = this.props.button; // This is helping us to write less code in case we would have a log file with many props usage.

    return <button onClick={this.handleClick} className={`button ${type}`}>{title}</button>
  }
}

export default Button;
