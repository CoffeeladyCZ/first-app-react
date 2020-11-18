import React from 'react';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';
import './img/coffee.svg';
import './img/bone.svg';
import './img/socks.svg';

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
const coffee = {
  alt: "coffee",
  src: "./img/coffee.svg"
};
const bone =  {
  alt: "bone",
  src: "./img/bone.svg"
};
const socks = {
  alt: "socks",
  src: "./img/socks.svg"
};

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
        <ProductBox alt="coffee" src={coffee} div={productBox} />
        <ProductBox alt="bone" src={bone} div={productBox} />
        <ProductBox alt="socks" src={socks} div={productBox} />
      </section>
      
      <Button button={greyButton}/>
      <Button button={button}/>

    


    </div>
  );
}

export default App;
