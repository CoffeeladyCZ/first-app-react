import React from 'react';

import logo from './coffee_logo.png';
import './App.css';
import Button from './Button';
import ProductBox from './Product-box';

// this is our data which we are passing as props to <Button component />
const button = {
  title: "Detail",
  type: "green"
}
const greyButton = {
  title: "Detail",
  type: "grey"
}
const productBox = {
  title: "Box"
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <ProductBox div={productBox} />
        <ProductBox div={productBox} />
        <ProductBox div={productBox} />
     
      <div className="App-button">
        <Button button={greyButton}/>
        <Button button={button}/>
      </div>
    


    </div>
  );
}

export default App;
