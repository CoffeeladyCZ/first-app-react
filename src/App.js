import React from 'react';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';
import './img/coffee.svg';

import './App.css';

import Button from './Button';
import ProductBox from './Product-box';
import Logo from './Logo';
import TopMenu from './TopMenu';


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
  title: "Product",
  price: "2 150 Kč",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor id mi. Pellentesque sapien. Praesent id justo."
};
const productBoxImage = {
  first: {
    alt: "coffee",
    src: "./img/coffee.svg"
  },
  second: {
    alt: "bone",
    src: "./img/bone.svg"
  },
  third: {
    alt: "socks",
    src: "./img/socks.svg"
  }
}


function App() {
  return (
    <div className="App">
      <header> 
        <Logo alt='coffee-logo' src={logo} />
        <Logo alt='kosik' src={kosik} />
      </header>  
      <nav>
        <TopMenu />
      </nav>
     
      <section className="box">
        <ProductBox div={productBox} />
        <ProductBox div={productBox} />
        <ProductBox div={productBox} />
      </section>
      
      <Button button={greyButton}/>
      <Button button={button}/>

    


    </div>
  );
}

export default App;
