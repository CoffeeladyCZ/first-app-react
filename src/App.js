import React from 'react';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';
import coffee from './img/coffee.svg';
import bone from './img/bone.svg';
import socks from './img/socks.svg';
import arabica from './img/coffee-arabica.svg';

import './App.css';

import ProductBox from './components/ProductBox';
import Logo from './components//Logo';
import TopMenu from './components//TopMenu';
import Banner from './components/Banner';
import InformationBox from './components/InformationBox';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';


// this is our data which we are passing as props to <Button component />
const button = {
  title: "Detail",
  type: "green"
}
const brownButton = {
  title: "Detail",
  type: "brown"
}
const productBoxContent = {
  firstProduct: {
    title: "Etiopie washed, 250 g",
    price: "369 Kč",
    description: "Promytá světle pražená Etiopie je jako stvořená pro váš ranní šálek filtrované kávy. Nádech jahod spolu s karamelem se stane vaší múzou, kvůli které nebudete moci dospat."
  },
  secondProduct: {
    title: "Kenya natural, 250 g",
    price: "2 150 Kč",
    description: "Světle pražená naturální káva z Kenyi je naší novinkou. Zamilujete si ji pro její nádech mléčné čokolády spolu s černým rybízem a lískovým oříškem. Budete ji milovat."
  },
  thirdProduct: {
    title: "Ponožky s motivem kávy",
    price: "150 Kč",
    description: "Každý kávomilec by je chtěl mít. Vyrobili jsme 30 párů ponožek, které vám bude barista ve vaší oblíbené kavárně závidět. "
  },
  fourthProduct: {
    title: "Rostlinka Coffee Arabica",
    price: "359 Kč",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor id mi. Pellentesque sapien. Praesent id justo."
  }
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
  },
  fourth: {
    alt: "arabica",
    src: arabica
  }
}
const bannerSection = {
  main: {
    type: "brown",
    text: "Ochutnejte novou kávu z Etiopie",
    src: "#",
    className: "mainBanner"
  },
  second: {
    type: "cream",
    text: "Bla Bla",
    className: "secondBanner"
  },
  third: {
    type: "lightBrown",
    text: "Bla Bla",
    className: "thirdBanner"
  }
};
const InformationBoxContent = {
    nadpis: "Proč bychom měli pít kávu?",
    liFirst: "První zajímavost",
    liSecond: "Druhá zajímavost",
    liThird: "Třetí zajímavost",
    text: "Tady bude nějaký úžasný text o tom, že bez kávy nelze žít. Vážně, je totiž skvělá."
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

      <section className="sectionBanner">
        <Banner className={bannerSection.main} content={bannerSection.main} />
        <div className="secondBannerLittle">
          <Banner className={bannerSection.second} content={bannerSection.second} />
          <Banner className={bannerSection.third} content={bannerSection.third} />
        </div>
      </section>

      <section >
        <h3>Naše nejnovější várka kávy</h3>
        <div className="sectionBox">
          <ProductBox content={productBoxContent.firstProduct} image={productBoxImage.first}/>
          <ProductBox content={productBoxContent.secondProduct} image={productBoxImage.second}/>
          <ProductBox content={productBoxContent.thirdProduct} image={productBoxImage.third}/>
        </div>
      </section>

      <section className="sectionBox">
        <InformationBox content={InformationBoxContent} />
      </section>

      <section>
        <h3>Produkty za výhodnou cenu</h3>
        <div className="sectionBox">
          <ProductBox content={productBoxContent.fourthProduct} image={productBoxImage.fourth} />
          <ProductBox content={productBoxContent.firstProduct} image={productBoxImage.first} />
          <ProductBox content={productBoxContent.secondProduct} image={productBoxImage.second} />
          <ProductBox content={productBoxContent.thirdProduct} image={productBoxImage.third} />
        </div>
      </section>

      <section class> 


      </section>

      <section className="sectionBox">
        <InstagramFeed />
      </section>
      <footer>
        <Footer />
      </footer>
     

    </div>
  );
}

export default App;
