import React from 'react';

import logo from './coffee_logo.png';
import './App.css';
import Button from './Button';

// this is our data which we are passing as props to <Button component />
const button = {
  title: "Detail",
  type: "buy"
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Button button={button}/>
    </div>
  );
}

export default App;
