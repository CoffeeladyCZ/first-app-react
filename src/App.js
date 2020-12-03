import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import logo from './img/coffee_logo.png';
import kosik from './img/kosik.png';

import ProductBox from './components/ProductBox';
import Logo from './components//Logo';
import TopMenu from './components//TopMenu';
import Banner from './components/Banner';
import InformationBox from './components/InformationBox';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import Clock from './components/Clock';

import { productBoxContent, bannerSection, productBoxImage, informationBoxContent, carouselBanner } from './data/dummyData';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      date: new Date() // může být tady?
      // color: true, - tohle tu je taky asi špatně
    }
  }

  handleAddProduct = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }

  handleRemoveProduct = () => {
    if (this.state.count <= 0) {
      this.setState({
          count:0
      });
    } else {
      this.setState({
          count: this.state.count - 1
      });
    }
  };

  // zobrazení aktuálního času - háže mi chybu v Clock.js
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // změna barvy banneru při kliknutí

  // changeColor = () => {
  //   if (this.state.color === true) {
  //     this.setState({
  //       className: 'pink' // tady nevím, co má vlastně být
  //     });
  //   } else {
  //     this.setState({
  //       className: 'brown'
  //     });
  //   }
  // };

  render() {
    return (
      <div className="App">
        <header>
          <Logo alt='coffee-logo' src={logo} />
          <Clock />
          <Logo alt='kosik' src={kosik} count={this.state.count}/>
        </header>
        <nav>
          <TopMenu />
        </nav>

        <section className="sectionBanner">
          <Carousel showArrows={true} autoPlay={true} interval={10000}>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerFirst} alt='' />
            </div>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerSecond} alt='' />
            </div>
            <div className='mainBanner'>
                <img src={carouselBanner.bannerThird} alt='' />
            </div>
          </Carousel>

          <div className="secondBannerLittle">
            <Banner className={bannerSection.second} content={bannerSection.second} />
            <Banner className={bannerSection.third} content={bannerSection.third} />
          </div>
        </section>

        <section >
          <h3>Naše nejnovější várka kávy</h3>
          <div className="sectionBox">
            <ProductBox
              content={productBoxContent.firstProduct}
              image={productBoxImage.first}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
            <ProductBox
              content={productBoxContent.secondProduct}
              image={productBoxImage.second}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
            <ProductBox
              content={productBoxContent.thirdProduct}
              image={productBoxImage.third}
              handleAddProduct={this.handleAddProduct}
              handleRemoveProduct={this.handleRemoveProduct}
              count={this.state.count}
              />
          </div>
        </section>

        <section className="sectionBox">
          <InformationBox 
            content={informationBoxContent}
            changeColor={this.changeColor}
            color={this.state.color}
                           />
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
};

export default App;
