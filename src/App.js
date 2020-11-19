import React from 'react';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';
import coffee from './img/coffee.svg';
import bone from './img/bone.svg';
import socks from './img/socks.svg';

import './App.css';

import Button from './components/Button';
import ProductBox from './components/ProductBox';
import Logo from './components//Logo';
import TopMenu from './components//TopMenu';


// this is our data which we are passing as props to <Button component />
const button = {
  title: "Detail",
  type: "green"
}
const greyButton = {
  title: "Detail",
  type: "grey"
}
const productBoxContent = {
  title: "Product",
  price: "2 150 Kč",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor id mi. Pellentesque sapien. Praesent id justo."
};
const productBoxImage = {
  first: {
    alt: "coffee",
    src: coffee
  },
  second: {
    alt: "bone",
    src: bone
  },
  third: {
    alt: "socks",
    src: socks
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
        <ProductBox content={productBoxContent} image={productBoxImage.first}/>
        <ProductBox content={productBoxContent} image={productBoxImage.second}/>
        <ProductBox content={productBoxContent} image={productBoxImage.third}/>
      </section>

      <Button button={greyButton}/>
      <Button button={button}/>
    </div>
  );
}

export default App;
